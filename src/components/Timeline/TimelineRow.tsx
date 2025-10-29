import React from "react";
import type { TimelineRow as TR } from "../../types/timeline.types";
export const TimelineRow = ({ row }: { row: TR }) => (
  <div
    role="region"
    aria-label={`${row.label} timeline. ${row.tasks.length} tasks.`}
    className="flex items-center gap-2 h-12 p-2"
  >
    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs">
      {row.label.charAt(0)}
    </div>
    <div className="text-sm">{row.label}</div>
  </div>
);
