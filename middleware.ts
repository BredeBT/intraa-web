export function middleware(req: NextRequest) {
  const loggedIn = req.cookies.get("intraa_auth")?.value === "1";

  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    !loggedIn
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
