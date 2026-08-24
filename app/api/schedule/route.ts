import { NextResponse } from "next/server";
import { sessions } from "@/content/data";
export async function GET() {
  return NextResponse.json({
    ok: true,
    data: sessions,
    mode: "demo",
    notice: "Demonstration content; not live availability.",
  });
}
