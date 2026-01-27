import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Feil passord" }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });

  res.cookies.set("intraa_auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, //  30 dager – dette er nøkkelen
  });

  return res;
}
