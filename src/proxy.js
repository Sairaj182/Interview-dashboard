import { NextResponse } from "next/server";

export function proxy(request) {

  const auth = request.headers.get("authorization");

  if (!auth) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  const base64 = auth.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString();

  const [user, pass] = decoded.split(":");

  if (
    user !== process.env.APP_USER ||
    pass !== process.env.APP_PASS
  ) {
    return new Response("Wrong credentials", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
