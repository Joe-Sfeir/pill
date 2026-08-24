import type { ClassType, Intensity, Level } from "@/types";
export type ClassFilters = {
  intensity?: Intensity;
  level?: Level;
  duration?: number;
  instructorId?: string;
  firstTimer?: boolean;
};
export function filterClasses(list: ClassType[], f: ClassFilters) {
  return list.filter(
    (c) =>
      (!f.intensity || c.intensity === f.intensity) &&
      (!f.level || c.level === f.level) &&
      (!f.duration || c.duration === f.duration) &&
      (!f.instructorId || c.instructorIds.includes(f.instructorId)) &&
      (!f.firstTimer || c.firstTimerSuitable),
  );
}
