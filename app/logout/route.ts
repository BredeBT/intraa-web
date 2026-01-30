import { NextRequest, NextResponse } from "next/server";

function getOrigin(req: NextRequest) {
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const forwardedHost =
    req.headers.get("x-forwarded-host") ?? req.headers.get("host");

  if (forwardedProto && forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  return new URL(req.url).origin;
}

export async function GET(req: NextRequest) {
  const origin = getOrigin(req);
  const res = NextResponse.redirect(new URL("/login", origin));
  const cookieDomain =
    process.env.COOKIE_DOMAIN ?? process.env.NEXT_PUBLIC_COOKIE_DOMAIN;

  res.cookies.set({
    name: "intraa_auth",
    value: "",
    path: "/",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
    maxAge: 0,
  });

  return res;
}
