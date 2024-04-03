"use server";

import { User } from "@prisma/client";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export const registerUser = async (data: Omit<User, "id">) => {
  try {
    // Register user
    const hashedPass = await bcrypt.hashSync(data.password, 10);
    const response = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPass,
      },
    });

    return {
      status: 200,
      message: "User created successfully",
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
};
