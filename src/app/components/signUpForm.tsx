import prisma from "@/lib/prisma";

export default async function SignUpForm() {
  const newUser = await prisma.user.create({
    data: {
      username: "Alice",
      email: "alice@prisma.io",
      password: "<PASSWORD>",
    },
  });

  const users = await prisma.user.findMany();
  return (
    <form className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md">
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="email"
      />
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="username"
      />
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="password"
      />
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="repeat the password"
      />
      <button
        type="submit"
        className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300"
      >
        register
      </button>
    </form>
  );

  //   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //     event.preventDefault();

  //     const newUser = await prisma.user.create({
  //       data: {
  //         username: "Alice",
  //         email: "alice@prisma.io",
  //         password: "test",
  //       },
  //     });
  //     console.log(newUser);
  //   }
}
