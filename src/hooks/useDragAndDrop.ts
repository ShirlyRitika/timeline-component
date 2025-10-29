import { useRef } from "react";
export const useDragAndDrop = () => {
  const ref = useRef(null);
  return { ref };
};
