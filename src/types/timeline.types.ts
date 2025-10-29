
export interface TimelineTask {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  rowId: string;
  dependencies?: string[];
}

export interface TimelineRow {
  id: string;
  label: string;
  tasks: string[];
  rowId: string;
}

export interface TimelineViewProps {
  rows: TimelineRow[];
  tasks: Record<string, TimelineTask>;
  startDate: Date;
  endDate: Date;
  viewMode: "day" | "week" | "month";
  onTaskUpdate?: (taskId: string, updates: Partial<TimelineTask>) => void;
}
