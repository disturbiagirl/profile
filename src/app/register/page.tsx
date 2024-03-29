import Link from "next/link";
import SignUpForm from "../components/signUpForm";

export default function Register() {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex flex-col items-center justify-center gap-3">
      <h1>Create a new account</h1>
      <SignUpForm />
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
