import { getSession, getUserData } from "@/actions";
import { redirect } from "next/navigation";

export default async function Profile({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await getSession();
  const user = await getUserData(id);

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12 flex flex-col items-center justify-center p-6">
      <h3>{user?.username}&apos;s profile</h3>
      <h4>ID:</h4>
      <p>{user?.id}</p>
      <h4>Email:</h4>
      <p>{user?.email}</p>
    </div>
  );
}
