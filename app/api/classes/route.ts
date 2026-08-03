import {NextResponse} from "next/server";import {classes} from "@/content/data";export async function GET(){return NextResponse.json({ok:true,data:classes,mode:"mock"})}
