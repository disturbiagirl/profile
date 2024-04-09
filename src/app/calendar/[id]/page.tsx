import { getSession, getUserData } from "@/actions";
import { redirect } from "next/navigation";
import Calendar from "@/app/components/Calendar";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const session = await getSession();
  const user = await getUserData(id);

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return <Calendar />;
}
