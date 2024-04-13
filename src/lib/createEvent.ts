"use server";

import { Event } from "@prisma/client";
import prisma from "./prisma";

export const createEvent = async (data: Omit<Event, "id">) => {
  try {
    const response = await prisma.event.create({
      data: {
        title: data.title,
        start: data.start,
        allDay: data.allDay,
      },
    });

    return {
      status: 200,
      message: "Event created successfully",
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
};
