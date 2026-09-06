import type { DayOfWeek, OpeningHour } from '../data/types';

const DAY_ORDER: DayOfWeek[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export interface OpenStatusResult {
  open: boolean;
  /** False when no day has any confirmed hours at all (not the same as "closed today"). */
  hasSchedule: boolean;
  /** When the status will next change, if there's schedule data to compute it from. */
  changeAt: { day: DayOfWeek; time: string; type: 'opens' | 'closes' } | null;
}

function timeToMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

const JAKARTA_PARTS = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export function jakartaDayAndMinutes(now: Date): { day: DayOfWeek; minutes: number } {
  const parts = JAKARTA_PARTS.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = get('weekday').toLowerCase() as DayOfWeek;
  const minutes = timeToMinutes(`${get('hour') || '00'}:${get('minute') || '00'}`);
  return { day, minutes };
}

/**
 * Computes whether the restaurant is open right now, in Asia/Jakarta time,
 * regardless of the visitor's own device timezone. Handles: a day with no
 * confirmed hours (closed=true or opens/closes null), and hours that cross
 * midnight (closes earlier than opens, e.g. opens 20:00 closes 02:00).
 */
export function isOpenNow(hours: OpeningHour[], now: Date): OpenStatusResult {
  const hasSchedule = hours.some((h) => !h.closed && h.opens && h.closes);
  if (!hasSchedule) {
    return { open: false, hasSchedule: false, changeAt: null };
  }

  const byDay = new Map(hours.map((h) => [h.day, h]));
  const { day: currentDay, minutes: currentMinutes } = jakartaDayAndMinutes(now);
  const currentIndex = DAY_ORDER.indexOf(currentDay);

  // A previous day's hours might cross midnight into today.
  const previousDay = DAY_ORDER[(currentIndex + 6) % 7];
  const previous = byDay.get(previousDay);
  if (previous && !previous.closed && previous.opens && previous.closes) {
    const prevOpen = timeToMinutes(previous.opens);
    const prevClose = timeToMinutes(previous.closes);
    if (prevClose < prevOpen && currentMinutes < prevClose) {
      return {
        open: true,
        hasSchedule: true,
        changeAt: { day: currentDay, time: previous.closes, type: 'closes' },
      };
    }
  }

  const today = byDay.get(currentDay);
  if (today && !today.closed && today.opens && today.closes) {
    const todayOpen = timeToMinutes(today.opens);
    const todayClose = timeToMinutes(today.closes);
    const crossesMidnight = todayClose < todayOpen;
    const isOpenNowToday = crossesMidnight
      ? currentMinutes >= todayOpen || currentMinutes < todayClose
      : currentMinutes >= todayOpen && currentMinutes < todayClose;

    if (isOpenNowToday) {
      return {
        open: true,
        hasSchedule: true,
        changeAt: { day: currentDay, time: today.closes, type: 'closes' },
      };
    }

    if (currentMinutes < todayOpen) {
      return {
        open: false,
        hasSchedule: true,
        changeAt: { day: currentDay, time: today.opens, type: 'opens' },
      };
    }
  }

  // Closed for the rest of today — find the next day with confirmed hours.
  for (let offset = 1; offset <= 7; offset++) {
    const day = DAY_ORDER[(currentIndex + offset) % 7];
    const schedule = byDay.get(day);
    if (schedule && !schedule.closed && schedule.opens) {
      return {
        open: false,
        hasSchedule: true,
        changeAt: { day, time: schedule.opens, type: 'opens' },
      };
    }
  }

  return { open: false, hasSchedule: true, changeAt: null };
}
