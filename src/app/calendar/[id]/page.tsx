import { getSession, getUserData } from "@/actions";
import { redirect } from "next/navigation";
import Calendar from "@/app/components/Calendar";
import { getEventData } from "@/lib/testFetchData";

export default async function Page({ params }: { params: { id: string } }) {
  const event = await getEventData();
  const id = params.id;
  const session = await getSession();
  const user = await getUserData(id);
  console.log(event);

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return <Calendar />;
}
