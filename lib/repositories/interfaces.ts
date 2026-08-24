import type { BookingInput, WaitlistInput } from "@/lib/validation/forms";
import type { ClassType, Instructor, Package, Session } from "@/types";
export interface ClassesRepository {
  list(): Promise<ClassType[]>;
}
export interface ScheduleRepository {
  list(): Promise<Session[]>;
}
export interface InstructorsRepository {
  list(): Promise<Instructor[]>;
}
export interface PackagesRepository {
  list(): Promise<Package[]>;
}
export interface BookingsRepository {
  create(input: BookingInput): Promise<{ id: string }>;
}
export interface WaitlistsRepository {
  create(input: WaitlistInput): Promise<{ id: string }>;
}
export interface ContactRepository {
  create(input: unknown): Promise<{ id: string }>;
}
export interface ConsentRepository {
  create(input: unknown): Promise<{ id: string }>;
}
export interface OpeningHoursRepository {
  list(): Promise<string[]>;
}
