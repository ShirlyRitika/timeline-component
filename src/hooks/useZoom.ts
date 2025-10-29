import { useCallback } from "react";
export const useZoom = (inFn: () => void, outFn: () => void) => ({
  wheel: useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.deltaY < 0 ? inFn() : outFn();
        e.preventDefault();
      }
    },
    [inFn, outFn]
  ),
});
