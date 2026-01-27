import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: "intraa_auth",
    value: "1",
    httpOnly: true,
    path: "/",                 // 🔴 KRITISK
    sameSite: "lax",
    secure: true,              // 🔴 KRITISK i prod (https)
  });

  return res;
}
