import NextAuth from "next-auth";
import { authOptions } from "lashiami-t3/server/auth";

export default NextAuth(authOptions);
