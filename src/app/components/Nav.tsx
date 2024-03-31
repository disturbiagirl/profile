import Link from "next/link";
import { getSession } from "@/actions";
import LogoutForm from "./logoutForm";

const Nav = async () => {
  const session = await getSession();

  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12">
      <nav className="flex flex-wrap items-center justify-between pt-6 bg-white">
        <Link href="/" className="text-5xl font-bold">
          profile app.
        </Link>
        <ul className="flex gap-6">
          <Link
            href="/"
            className="pt-3 text-gray-500 hover:text-blue-500 hover:underline hover:underline-offset-8"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="pt-3 text-gray-500  hover:text-blue-500 hover:underline hover:underline-offset-8"
          >
            ABOUT
          </Link>
          <Link
            href="/login"
            className="pt-3 text-gray-500  hover:text-blue-500 hover:underline hover:underline-offset-8"
          >
            LOGIN
          </Link>
        </ul>
        {session.isLoggedIn && <LogoutForm />}
      </nav>
    </div>
  );
};

export default Nav;
