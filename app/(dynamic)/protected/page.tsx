import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/signin-auto");
  }
  return <div>{session.user.name}</div>;
}
