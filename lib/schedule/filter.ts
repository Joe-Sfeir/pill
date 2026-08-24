import type { Session } from "@/types";
export function filterSchedule(
  list: Session[],
  f: {
    classId?: string;
    instructorId?: string;
    firstTimer?: boolean;
    availableOnly?: boolean;
  },
) {
  return list.filter(
    (s) =>
      (!f.classId || s.classId === f.classId) &&
      (!f.instructorId || s.instructorId === f.instructorId) &&
      (!f.firstTimer || s.firstTimerEligible) &&
      (!f.availableOnly || s.status === "Available"),
  );
}
