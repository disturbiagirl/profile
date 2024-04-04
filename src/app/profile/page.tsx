import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex items-center justify-center p-6">
      Your profile page. Only accesible for logged in users.
    </div>
  );
}
