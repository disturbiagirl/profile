"use server";

import { User } from "@prisma/client";
import prisma from "./prisma";

export const registerUser = async (data: Omit<User, "id">) => {
  try {
    // Register user
    const response = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
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
