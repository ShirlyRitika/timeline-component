import { useEffect } from "react";
export const useScrollSync = (leftRef :any, rightRef:any) => {
  useEffect(() => {
    const left = leftRef.current,
      right = rightRef.current;
    if (!left || !right) return;
    const h = () => (right.scrollTop = left.scrollTop);
    left.addEventListener("scroll", h);
    return () => left.removeEventListener("scroll", h);
  }, [leftRef, rightRef]);
};
