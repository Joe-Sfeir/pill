import { NextResponse } from "next/server";
import { z } from "zod";
import { safeError } from "@/lib/api/http";
const schema = z.object({
  essential: z.literal(true),
  analytics: z.boolean(),
  marketing: z.boolean(),
  version: z.string(),
});
export async function POST(request: Request) {
  try {
    schema.parse(await request.json());
    return NextResponse.json(
      { ok: true, receipt: `demo-consent-${crypto.randomUUID()}`, mode: "demo", retained: false },
      { status: 201 },
    );
  } catch {
    return safeError();
  }
}
