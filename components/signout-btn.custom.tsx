"use client";

import { signOut } from "next-auth/react";

export default function SignOutBtnCustom() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
