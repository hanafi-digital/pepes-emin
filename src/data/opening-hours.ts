import type { DayOfWeek, OpeningHour } from "./types";

// TODO(owner): every day below is unconfirmed. Until the owner confirms real
// hours, every day stays closed with opens/closes null — never guess. Wrong
// hours mean a customer travels here and finds it shut.

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
  closed: true,
  opens: null,
  closes: null,
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
