import { login } from "@/actions";

const LoginForm = () => {
  console.log();
  return (
    <form
      action={login}
      className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md"
    >
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="username"
        name="username"
        required
      />
      <input
        className="border-2 rounded-sm outline-gray-300 px-2 py-1"
        type="text"
        placeholder="password"
        name="password"
        required
      />
      <input
        type="submit"
        className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300"
      />
    </form>
  );
};

export default LoginForm;
