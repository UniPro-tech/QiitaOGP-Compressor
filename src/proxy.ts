import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);
  const originaHost = req.headers.get("host") || "localhost:3000";
  requestHeaders.set("x-origin-host", originaHost);
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  requestHeaders.set("x-origin-proto", protocol);
  const baseUrl = `${protocol}://${originaHost}`;
  requestHeaders.set("x-base-url", baseUrl);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
