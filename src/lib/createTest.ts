"use server";

import { Test } from "@prisma/client";
import prisma from "./prisma";

export const createTest = async (data: Omit<Test, "id">) => {
  try {
    const response = await prisma.test.create({
      data: {
        event: data.event,
      },
    });

    return {
      status: 200,
      message: "Test created successfully",
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
};
