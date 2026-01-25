import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("intraa_auth", "1", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });

  return res;
}
