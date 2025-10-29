import { differenceInCalendarDays, addDays } from 'date-fns';
import type { ViewMode } from '../types/timeline.types';

export const msPerDay = 1000 * 60 * 60 * 24;

export const getPixelsPerDayForView = (view: ViewMode) => {
  if (view === 'day') return 40;
  if (view === 'week') return 80 / 7;
  return 120 / 30;
};

export const calculatePosition = (
  date: Date,
  startDate: Date,
  pixelsPerDay: number
): number => {
  const daysSinceStart = differenceInCalendarDays(date, startDate);
  return Math.round(daysSinceStart * pixelsPerDay);
};

export const calculateDuration = (
  startDate: Date,
  endDate: Date,
  pixelsPerDay: number
): number => {
  const durationDays = Math.max(1, differenceInCalendarDays(endDate, startDate) + 1);
  return Math.round(durationDays * pixelsPerDay);
};

export const calculateDateFromPosition = (
  position: number,
  startDate: Date,
  pixelsPerDay: number
): Date => {
  const days = Math.round(position / pixelsPerDay);
  const result = addDays(startDate, days);
  return result;
};
