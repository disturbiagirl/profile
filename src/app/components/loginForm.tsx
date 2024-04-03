"use client";
import { z } from "zod";
import { login } from "@/actions";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormSchema = z.object({
  email: z.string().email("Please enter your email address"),
  password: z.string().min(4, "Password is required"),
});

type InputType = z.infer<typeof FormSchema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const logIn: SubmitHandler<InputType> = async (data) => {
    console.log(data);
    try {
      const result = await login({
        email: data.email,
        password: data.password,
      });

      console.log(result);

      if (result.status === 200) {
        router.push("/");
      } else toast.warning(result.message);
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(logIn)}
      className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md"
    >
      <input
        {...register("email")}
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="email"
        required
      />
      {errors.email && (
        <p className="mt-2 italic text-md text-error">
          {errors.email?.message}
        </p>
      )}
      <input
        {...register("password")}
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="password"
        placeholder="password"
        required
      />
      {errors.password && (
        <p className="mt-2 italic text-md text-error">
          {errors.password?.message}
        </p>
      )}
      <input
        type="submit"
        className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300"
      />
    </form>
  );
};

export default LoginForm;
