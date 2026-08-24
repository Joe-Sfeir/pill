import { sessions } from "@/content/data";
import { sessionToIcs } from "@/lib/dates/ics";
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const s = sessions.find((x) => x.id === id);
  if (!s) return new Response("Not found", { status: 404 });
  return new Response(sessionToIcs(s), {
    headers: {
      "content-type": "text/calendar; charset=utf-8",
      "content-disposition": `attachment; filename="${s.id}.ics"`,
    },
  });
}
