import { getSession, getUserData } from "@/actions";
import { redirect } from "next/navigation";

export default async function Profile({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await getSession();
  const user = await getUserData(id);

  if (!session.isLoggedIn) {
    redirect("/");
  }

  console.log(session);

  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex items-center justify-center p-6">
      <p>your profile</p>
    </div>
  );
}
