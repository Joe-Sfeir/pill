import { NextResponse } from "next/server";
const buckets = new Map<string, { count: number; at: number }>();
export function limited(request: Request, limit = 8) {
  const key = request.headers.get("x-forwarded-for") || "local";
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now - b.at > 60_000) {
    buckets.set(key, { count: 1, at: now });
    return false;
  }
  b.count++;
  return b.count > limit;
}
export function safeError(
  status = 400,
  message = "The request could not be processed.",
) {
  return NextResponse.json(
    { ok: false, error: { code: "INVALID_REQUEST", message } },
    { status },
  );
}
