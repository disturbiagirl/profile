import prisma from "../lib/prisma";

export const getEventData = async () => {
  const id = 4;
  const event = await prisma.test.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      event: true,
    },
  });

  return event;
};
