import React, { useState } from "react";
import { TimelineView } from "../components/Timeline/TimelineView";
import type { TimelineRow, TimelineTask } from "../types/timeline.types";

const rows: TimelineRow[] = [
  {
    id: "row-1",
    rowId: "row-1",
    label: "Frontend Team",
    tasks: ["task-1", "task-2"],
  },
  { id: "row-2", rowId: "row-2", label: "Backend Team", tasks: ["task-3"] },
  { id: "row-3", rowId: "row-3", label: "Design Team", tasks: ["task-4"] },
];

const baseTasks: Record<string, TimelineTask> = {
  "task-1": {
    id: "task-1",
    title: "UI Components",
    startDate: new Date(2024, 8, 1),
    endDate: new Date(2024, 8, 8),
    progress: 60,
    rowId: "row-1",
    dependencies: [],
    color: "#3b82f6",
    isMilestone: false,
  },
  "task-2": {
    id: "task-2",
    title: "Integration",
    startDate: new Date(2024, 8, 9),
    endDate: new Date(2024, 8, 14),
    progress: 10,
    rowId: "row-1",
    dependencies: ["task-1"],
    color: "#0ea5e9",
    isMilestone: false,
  },
  "task-3": {
    id: "task-3",
    title: "API",
    startDate: new Date(2024, 8, 1),
    endDate: new Date(2024, 8, 12),
    progress: 80,
    rowId: "row-2",
    dependencies: [],
    color: "#10b981",
    isMilestone: false,
  },
  "task-4": {
    id: "task-4",
    title: "Design",
    startDate: new Date(2024, 8, 3),
    endDate: new Date(2024, 8, 9),
    progress: 100,
    rowId: "row-3",
    dependencies: [],
    color: "#f59e0b",
    isMilestone: false,
  },
};

export const TimelineDemoApp: React.FC = () => {
  const [tasks, setTasks] = useState(baseTasks);
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week");
  const startDate = new Date(2024, 7, 25);
  const endDate = new Date(2024, 10, 5);

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setViewMode("day")}
        >
          Day
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setViewMode("week")}
        >
          Week
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setViewMode("month")}
        >
          Month
        </button>
      </div>
      <TimelineView
        rows={rows}
        tasks={tasks}
        startDate={startDate}
        endDate={endDate}
        viewMode={viewMode}
        onTaskUpdate={(id, u) =>
          setTasks((prev) => ({ ...prev, [id]: { ...prev[id], ...u } }))
        }
      />
    </div>
  );
};
