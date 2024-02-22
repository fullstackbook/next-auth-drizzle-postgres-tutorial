import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { db } from "./db";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
  },
});
