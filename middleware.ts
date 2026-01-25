import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("intraa_auth")?.value;
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  // DEBUG – kan fjernes senere
  console.log("MIDDLEWARE PATH:", req.nextUrl.pathname);
  console.log("COOKIE intraa_auth:", authCookie);

  if (isDashboard && authCookie !== "1") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
