import React, { useMemo, useState } from "react";
import type { TimelineViewProps } from "./TimelineView.types";
import { TaskBar } from "./TaskBar";
import { TimelineGrid } from "./TimelineGrid";
import { DependencyLine } from "./DependencyLine";
import {
  LEFT_PANEL_WIDTH,
  ROW_HEIGHT,
} from "../../constants/timeline.constants";
import { TaskDetailSidebar } from "./TaskDetailSidebar";
import {
  calculatePosition,
  calculateDuration,
  getPixelsPerDayForView,
} from "../../utils/position.utils";

export const TimelineView: React.FC<TimelineViewProps> = ({
  rows,
  tasks,
  startDate,
  endDate,
  viewMode,
  onTaskUpdate,
}) => {
  const pixelsPerDay = getPixelsPerDayForView(viewMode);
  const totalDays = Math.max(
    1,
    Math.round(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    )
  );
  const contentWidth = totalDays * pixelsPerDay;
  const [taskMap, setTaskMap] = useState(tasks);
  const [selectedTask, setSelectedTask] = useState<string | undefined>(
    undefined
  );

  const rowPositions = useMemo(() => {
    const map: Record<string, number> = {};
    rows.forEach((r, i) => (map[r.id] = i * ROW_HEIGHT));
    return map;
  }, [rows]);

  const handleTaskSave = (updatedTask: any) => {
    const updatedTasks = { ...taskMap, [updatedTask.id]: updatedTask };
    setTaskMap(updatedTasks);

    if (onTaskUpdate) onTaskUpdate(updatedTask);

    setSelectedTask(undefined);
  };

  return (
    <div className="w-full h-full border rounded-xl bg-gray-100 flex shadow-md overflow-hidden">
      <div
        className="bg-white border-r px-4 py-6"
        style={{ width: LEFT_PANEL_WIDTH }}
      >
        <h3 className="font-semibold text-lg mb-4 text-gray-800">Resources</h3>
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.id} className="text-gray-700 font-medium">
              {r.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative overflow-auto bg-gray-50">
        <TimelineGrid
          startDate={startDate}
          endDate={endDate}
          viewMode={viewMode}
          pixelsPerDay={pixelsPerDay}
          contentWidth={contentWidth}
        />

        <div
          style={{ width: contentWidth, minHeight: rows.length * ROW_HEIGHT }}
          className="relative divide-y divide-gray-200"
        >
          {rows.map((row, rowIndex) => (
            <div
              key={row.id}
              className={`relative transition-colors duration-300 ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
              style={{ height: ROW_HEIGHT }}
            >
              {row.tasks.map((taskId) => {
                const task = taskMap[taskId];
                const left = calculatePosition(
                  task.startDate,
                  startDate,
                  pixelsPerDay
                );
                const width = calculateDuration(
                  task.startDate,
                  task.endDate,
                  pixelsPerDay
                );
                const top = 8;

                return (
                  <TaskBar
                    key={task.id}
                    task={task}
                    left={left}
                    width={width}
                    top={top}
                    pixelsPerDay={pixelsPerDay}
                    viewStartDate={startDate}
                    onClick={() => setSelectedTask(task.id)}
                    onUpdate={(updatedTask) => handleTaskSave(updatedTask)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`transform transition-transform duration-300 ${
          selectedTask ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <TaskDetailSidebar
          task={selectedTask ? taskMap[selectedTask] : undefined}
          onClose={() => setSelectedTask(undefined)}
          onSave={handleTaskSave}
        />
      </div>
    </div>
  );
};
