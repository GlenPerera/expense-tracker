import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export default clerkMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
