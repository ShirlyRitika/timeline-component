import React from "react";
export const Slider = ({ value, onChange }: any) => (
  <input
  type="range"
  min={0}
  max={100}
  value={value}
  onChange={(e) => onChange(Number(e.target.value))}
  aria-label="Progress"
  className="w-full accent-blue-600"
/>
);
