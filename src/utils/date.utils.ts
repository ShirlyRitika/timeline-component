import { format } from 'date-fns';
export const formatDateShort = (d: Date) => format(d, 'MMM d');
export const formatDateFull = (d: Date) => format(d, 'yyyy-MM-dd');
