import type { TimelineTask } from "../types/timeline.types";
export const validateTaskDates = (task: TimelineTask) => task.endDate.getTime() >= task.startDate.getTime();
