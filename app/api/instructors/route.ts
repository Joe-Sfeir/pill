import {NextResponse} from "next/server";import {instructors} from "@/content/data";export async function GET(){return NextResponse.json({ok:true,data:instructors,mode:"mock"})}
