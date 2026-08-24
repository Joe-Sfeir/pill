import type { Session } from "@/types";
import { classes, instructors } from "@/content/data";
const esc = (s: string) => s.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
export function sessionToIcs(s: Session) {
  const c = classes.find((x) => x.id === s.classId);
  const i = instructors.find((x) => x.id === s.instructorId);
  const dt = (date: string, time: string) =>
    `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FORME//Schedule//EN",
    "BEGIN:VEVENT",
    `UID:${s.id}@forme-concept`,
    `DTSTART;TZID=${s.timeZone}:${dt(s.date, s.startTime)}`,
    `DTEND;TZID=${s.timeZone}:${dt(s.date, s.endTime)}`,
    `SUMMARY:${esc(c?.name || "FORME Session")}`,
    `DESCRIPTION:${esc(`Illustrative FORME concept session with ${i?.name || "a fictional instructor"}. This calendar entry is not a booking.`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
