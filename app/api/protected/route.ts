import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  if (!session) {
    return Response.json({ message: "unauthenticated" }, { status: 401 });
  }
  return Response.json({ name: session?.user.name });
}
