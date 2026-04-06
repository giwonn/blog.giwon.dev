import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "blog-session";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get(SESSION_COOKIE)) {
    const sessionId = crypto.randomUUID();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    response.cookies.set(SESSION_COOKIE, sessionId, {
      path: "/",
      httpOnly: true,
      expires: midnight,
    });
  }

  return response;
}
