"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const getUserData = async (userId: string) => {
  const id = Number(userId);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  return user;
};

export const login = async (data: Omit<User, "id" | "username">) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user)
    return {
      status: 400,
      message: "Invalid credentials",
    };

  const isPassCorrect = bcrypt.compareSync(data.password, user.password);

  if (!isPassCorrect)
    return {
      status: 400,
      message: "Invalid credentials",
    };

  try {
    const session = await getSession();

    session.isLoggedIn = true;
    session.userId = user.id.toString();
    session.username = user.username;
    session.email = user.email;

    await session.save();

    return {
      status: 200,
      message: "User logged in successfully",
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
