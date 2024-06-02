import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export default async function middleware(req: NextRequest, event: any) {
  const url = req.nextUrl;

  // Define the path for the landing page
  const landingPagePath = "/dashboard";

  // If the request is for the landing page, skip Clerk's middleware
  if (url.pathname === landingPagePath) {
    return NextResponse.next();
  }

  // Apply Clerk's middleware for all other routes
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
