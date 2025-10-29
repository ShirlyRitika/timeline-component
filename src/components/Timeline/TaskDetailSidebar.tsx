import React, { useState, useEffect } from "react";
import type { TimelineTask } from "../../types/timeline.types";

interface Props {
  task?: TimelineTask;
  onClose: () => void;
  onSave: (updated: TimelineTask) => void;
}

export const TaskDetailSidebar: React.FC<Props> = ({
  task,
  onClose,
  onSave,
}) => {
  const [editable, setEditable] = useState<TimelineTask | undefined>(task);

  useEffect(() => setEditable(task), [task]);

  if (!editable) return null;

  return (
    <div className="w-80 bg-white border-l p-4 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Task Details</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      <label className="block text-sm font-medium mb-1">Title</label>
      <input
        type="text"
        className="w-full border rounded p-2 mb-3"
        value={editable.title}
        onChange={(e) => setEditable({ ...editable, title: e.target.value })}
      />

      <label className="block text-sm font-medium mb-1">Progress (%)</label>
      <input
        type="number"
        className="w-full border rounded p-2 mb-3"
        value={editable.progress}
        onChange={(e) =>
          setEditable({ ...editable, progress: Number(e.target.value) })
        }
      />

      <button
        onClick={() => {
          if (editable) onSave(editable);
          onClose();
        }}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
      >
        Save
      </button>
    </div>
  );
};
