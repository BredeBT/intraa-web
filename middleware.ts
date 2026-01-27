import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("intraa_auth")?.value;
  const path = req.nextUrl.pathname;

  const isDashboard =
    path === "/dashboard" || path.startsWith("/dashboard/");

  if (isDashboard && auth !== "1") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
