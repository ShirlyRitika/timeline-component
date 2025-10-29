import { useState, useCallback } from "react";
import type { ViewMode } from "../types/timeline.types";
export const useTimeline = (initial: ViewMode = "week") => {
  const [viewMode, setViewMode] = useState<ViewMode>(initial);
  const zoomIn = useCallback(
    () =>
      setViewMode((v) => (v === "month" ? "week" : v === "week" ? "day" : v)),
    []
  );
  const zoomOut = useCallback(
    () =>
      setViewMode((v) => (v === "day" ? "week" : v === "week" ? "month" : v)),
    []
  );
  return { viewMode, setViewMode, zoomIn, zoomOut };
};
