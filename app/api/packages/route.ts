import { NextResponse } from "next/server";
import { packages } from "@/content/data";
export async function GET() {
  return NextResponse.json({
    ok: true,
    data: packages,
    mode: "demo",
    notice: "Illustrative prices and terms for a fictional concept; no purchase is available.",
  });
}
