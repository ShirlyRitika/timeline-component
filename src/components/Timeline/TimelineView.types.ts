import type {
  TimelineRow,
  TimelineTask,
  ViewMode,
} from "../../types/timeline.types";
export interface TimelineViewProps {
  rows: TimelineRow[];
  tasks: Record<string, TimelineTask>;
  startDate: Date;
  endDate: Date;
  viewMode: ViewMode;
  onTaskUpdate?: (taskId: string, updates: Partial<TimelineTask>) => void;
  onTaskMove?: (taskId: string, newRowId: string, newStartDate: Date) => void;
}
