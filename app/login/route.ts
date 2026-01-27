import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: "intraa_auth",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res;
}
