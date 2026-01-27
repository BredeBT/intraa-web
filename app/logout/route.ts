import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_BASE_URL));

  res.cookies.set("intraa_auth", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}
