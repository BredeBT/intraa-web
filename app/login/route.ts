import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: "intraa_auth",
    value: "1",
    httpOnly: true,
    path: "/",              // 🔴 VIKTIG
    sameSite: "lax",        // 🔴 VIKTIG
    secure: true,           // OK i prod (https)
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
