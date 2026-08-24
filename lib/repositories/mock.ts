import { classes, instructors, packages, sessions } from "@/content/data";
import type {
  BookingsRepository,
  ClassesRepository,
  InstructorsRepository,
  PackagesRepository,
  ScheduleRepository,
  WaitlistsRepository,
} from "./interfaces";
export const mockClasses: ClassesRepository = {
  async list() {
    return classes;
  },
};
export const mockSchedule: ScheduleRepository = {
  async list() {
    return sessions;
  },
};
export const mockInstructors: InstructorsRepository = {
  async list() {
    return instructors;
  },
};
export const mockPackages: PackagesRepository = {
  async list() {
    return packages;
  },
};
export const mockBookings: BookingsRepository = {
  async create() {
    return { id: `mock-booking-${crypto.randomUUID()}` };
  },
};
export const mockWaitlists: WaitlistsRepository = {
  async create() {
    return { id: `mock-waitlist-${crypto.randomUUID()}` };
  },
};
