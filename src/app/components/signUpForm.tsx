"use client";

import { registerUser } from "@/lib/createUser";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const FormSchema = z
  .object({
    username: z
      .string()
      .min(2, "First Name must be at least 2 characters")
      .max(45, "First Name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z0-9.@_-]+$"), "This username is not valid"),
    email: z.string().email("Please enter a valid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at less than 50 characters"),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Password and confirm password doesn't match",
    path: ["repeatPassword"],
  });

type InputType = z.infer<typeof FormSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const saveUser: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await registerUser(data);
      if (result.status === 200) {
        toast.success(result.message);
        router.push("/login");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md"
    >
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="email"
        placeholder="email"
        {...register("email")}
      />
      {errors.email && (
        <p className="mt-2 italic text-md text-error">
          {errors.email?.message}
        </p>
      )}
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="username"
        {...register("username")}
      />
      {errors.username && (
        <p className="mt-2 italic text-md text-error">
          {errors.username?.message}
        </p>
      )}
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="password"
        placeholder="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="mt-2 italic text-md text-error">
          {errors.password?.message}
        </p>
      )}
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="password"
        placeholder="repeat the password"
        {...register("repeatPassword")}
      />
      {errors.repeatPassword && (
        <p className="mt-2 italic text-md text-error">
          {errors.repeatPassword?.message}
        </p>
      )}
      <button
        type="submit"
        className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300"
      >
        register
      </button>
    </form>
  );
}
