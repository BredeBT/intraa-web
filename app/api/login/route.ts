import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();
  const adminPassword =
    process.env.ADMIN_PASSWORD ?? process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return new Response("Unauthorized", { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  const cookieDomain =
    process.env.COOKIE_DOMAIN ?? process.env.NEXT_PUBLIC_COOKIE_DOMAIN;

  res.cookies.set("intraa_auth", "1", {
    httpOnly: true,
    path: "/",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
