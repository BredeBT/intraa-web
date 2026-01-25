import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    new URL("/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000")
  );

  response.cookies.set("intraa_auth", "", {
    path: "/",
    expires: new Date(0),
  });

  return response;
}
