import type { DayOfWeek, OpeningHour } from "./types";

// Confirmed against the restaurant's own Google Business Profile listing
// (the hours real customers see when they look this place up). Friday is
// the one day it's closed.

const SCHEDULE: Record<DayOfWeek, { closed: boolean; opens: string | null; closes: string | null }> = {
  monday: { closed: false, opens: "09:00", closes: "17:00" },
  tuesday: { closed: false, opens: "09:00", closes: "17:00" },
  wednesday: { closed: false, opens: "09:00", closes: "17:00" },
  thursday: { closed: false, opens: "09:00", closes: "17:00" },
  friday: { closed: true, opens: null, closes: null },
  saturday: { closed: false, opens: "09:00", closes: "17:00" },
  sunday: { closed: false, opens: "09:00", closes: "17:00" },
};

const DAYS: DayOfWeek[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const openingHours: OpeningHour[] = DAYS.map((day) => ({
  day,
  ...SCHEDULE[day],
}));

export const DAY_LABEL_ID: Record<DayOfWeek, string> = {
  monday: "Senin",
  tuesday: "Selasa",
  wednesday: "Rabu",
  thursday: "Kamis",
  friday: "Jumat",
  saturday: "Sabtu",
  sunday: "Minggu",
};
