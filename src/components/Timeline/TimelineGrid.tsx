import React from "react";
import { generateTimeScale } from "../../utils/generateScale";
import type { ViewMode } from "../../types/timeline.types";

export const TimelineGrid = ({
  startDate,
  endDate,
  viewMode,
  pixelsPerDay,
  contentWidth,
}: {
  startDate: Date;
  endDate: Date;
  viewMode: ViewMode;
  pixelsPerDay: number;
  contentWidth: number;
}) => {
  const scale = generateTimeScale(startDate, endDate, viewMode);

  return (
    <div className="relative border-b bg-gray-100">
      <div
        className="grid border-collapse"
        style={{
          gridTemplateColumns: `repeat(${scale.length}, ${pixelsPerDay}px)`,
          width: contentWidth,
          height: "56px",
        }}
      >
        {scale.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center border-r border-gray-300 text-xs text-gray-700"
          >
            <span className="font-medium">{s.label.split(" ")[0]}</span>
            <span className="text-[11px] text-gray-500">
              {s.label.split(" ")[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
