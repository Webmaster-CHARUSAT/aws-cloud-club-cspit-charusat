import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthenticated } from "./lib/verify";

export async function middleware(request: NextRequest) {
  console.log("middleware request.url: ", request.url);

  console.log("middleware isAuthenticated: ", await isAuthenticated(request));

  if (!(await isAuthenticated(request))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
