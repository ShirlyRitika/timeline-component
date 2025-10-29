import React from "react";
import type { TaskBarProps } from "./TaskBar.types";

export const TaskBar: React.FC<TaskBarProps> = ({
  task,
  left,
  width,
  top,
  onClick,
}) => {
  return (
    <div
      className="absolute rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
      style={{
        left,
        top,
        width,
        height: 28,
        background: "linear-gradient(to right, #1d4ed8, #2563eb)",
        color: "white",
      }}
      onClick={onClick}
    >
      <div className="flex justify-between items-center px-3 text-sm h-full">
        <span className="font-semibold">{task.title}</span>
        <span className="text-xs opacity-90">{task.progress}%</span>
      </div>

      <div
        className="absolute top-0 left-0 h-full bg-blue-400 opacity-40 rounded-lg"
        style={{ width: `${task.progress}%` }}
      ></div>
    </div>
  );
};
