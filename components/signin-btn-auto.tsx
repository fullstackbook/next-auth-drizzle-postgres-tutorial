"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInBtnAuto() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
