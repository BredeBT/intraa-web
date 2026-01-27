import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return new Response("Unauthorized", { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("intraa_auth", "1", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
