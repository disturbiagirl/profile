import Link from "next/link";
import LoginForm from "../components/signUpForm";

export default function Login() {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex flex-col items-center justify-center gap-3">
      <h1>Login to your account</h1>
      <LoginForm />
      <p>
        Do not have an account yet?
        <Link
          href="/register"
          className=" text-gray-500 hover:text-blue-500 hover:underline hover:underline-offset-4 ml-2"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
