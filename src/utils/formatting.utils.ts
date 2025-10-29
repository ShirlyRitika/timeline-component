// import { format } from 'date-fns'; export const prettyRange = (s:Date,e:Date)=> \`\${format(s,'MMM d')} - \${format(e,'MMM d')}\`;
import { format } from "date-fns";

/**
 * Formats a date range like "Oct 1 - Oct 5"
 */
export const prettyRange = (start: Date, end: Date): string => {
  const startFormatted = format(start, "MMM d");
  const endFormatted = format(end, "MMM d");
  return `${startFormatted} - ${endFormatted}`;
};
