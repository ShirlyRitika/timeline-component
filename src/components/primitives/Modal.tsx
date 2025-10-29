import React from "react";
export const Modal = ({ isOpen, onClose, title, children }: any) =>
  isOpen ? (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-96 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <strong>{title}</strong>
          <button onClick={onClose}>Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
