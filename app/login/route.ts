import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const password = body.password;

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Feil passord" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("intraa_auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dager
  });

  return res;
}
