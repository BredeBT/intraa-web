import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/";

  const response = NextResponse.redirect(url);
  response.cookies.set("intraa_auth", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}
