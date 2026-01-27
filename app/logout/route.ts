import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/login", req.url));

  res.cookies.set({
    name: "intraa_auth",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return res;
}
