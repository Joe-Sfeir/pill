import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/forms";
import { limited, safeError } from "@/lib/api/http";
import { mockBookings } from "@/lib/repositories/mock";
export async function POST(request: Request) {
  if (limited(request))
    return safeError(429, "Please wait before trying again.");
  try {
    const input = bookingSchema.parse(await request.json());
    const result = await mockBookings.create(input);
    return NextResponse.json({ ok: true, receipt: result.id, mode: "demo", retained: false, bookingCreated: false }, { status: 201 });
  } catch {
    return safeError();
  }
}
