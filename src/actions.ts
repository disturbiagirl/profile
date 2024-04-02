"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import prisma from "./lib/prisma";

let email = "test@test.com";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (data: Omit<User, "id" | "username">) => {
  const session = await getSession();

  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user)
    return {
      status: 400,
      message: "Invalid credentials",
    };

  session.isLoggedIn = true;

  await session.save();
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
