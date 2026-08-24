import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation/forms";
import { limited, safeError } from "@/lib/api/http";
import { mockWaitlists } from "@/lib/repositories/mock";
export async function POST(request: Request) {
  if (limited(request))
    return safeError(429, "Please wait before trying again.");
  try {
    const input = waitlistSchema.parse(await request.json());
    const result = await mockWaitlists.create(input);
    return NextResponse.json({ ok: true, receipt: result.id, mode: "demo", retained: false, waitlistPlaceCreated: false }, { status: 201 });
  } catch {
    return safeError();
  }
}
