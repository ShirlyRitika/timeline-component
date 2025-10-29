import React from "react";
export const Button = ({ children, ...rest }: any) => (
  <button className="px-3 py-1 border rounded" {...rest}>
    {children}
  </button>
);
