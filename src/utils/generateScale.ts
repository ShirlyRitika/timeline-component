import { format } from 'date-fns';
import type { ViewMode } from '../types/timeline.types';

export const generateTimeScale = (startDate: Date, endDate: Date, viewMode: ViewMode) => {
  const scale: Array<{ date: Date; label: string }> = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    if (viewMode === 'day') {
      scale.push({ date: new Date(current), label: format(current, 'EEE d') });
      current.setDate(current.getDate() + 1);
    } else if (viewMode === 'week') {
      scale.push({ date: new Date(current), label: `W${getWeekNumber(current)}` });
      current.setDate(current.getDate() + 7);
    } else {
      scale.push({ date: new Date(current), label: format(current, 'MMM yyyy') });
      current.setMonth(current.getMonth() + 1);
    }
  }
  return scale;
};

const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};
