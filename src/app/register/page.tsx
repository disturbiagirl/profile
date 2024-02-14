import Link from "next/link";

export default function Register() {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex flex-col items-center justify-center gap-3">
      <h1>Create a new account</h1>
      <form className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 p-4 rounded-md">
        <input
          className="border-2 rounded-sm outline-gray-300 px-2 py-1"
          type="text"
          placeholder="email"
        />
        <input
          className="border-2 rounded-sm outline-gray-300 px-2 py-1"
          type="text"
          placeholder="nickname"
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
        <button className="bg-gray-200 rounded-sm w-full p-1 hover:bg-gray-300">
          register
        </button>
      </form>
      <p>
        Already have an account?
        <Link
          href="/login"
          className=" text-gray-500 hover:text-blue-500 hover:underline hover:underline-offset-4 ml-2"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
