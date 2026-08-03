import type {Instructor} from "@/types";export function instructorBySlug(list:Instructor[],slug:string){return list.find(i=>i.active&&i.slug===slug)}
