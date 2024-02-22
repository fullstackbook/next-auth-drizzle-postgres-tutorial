import { auth } from "@/lib/auth";
import { ReactNode } from "react";
import SessionProvider from "@/components/session-provider";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div>{children}</div>
    </SessionProvider>
  );
}
