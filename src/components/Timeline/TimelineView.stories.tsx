import type { Meta, StoryObj } from "@storybook/react";
import { TimelineView } from "./TimelineView";
import type { TimelineTask, TimelineRow } from "../../types/timeline.types";

const meta: Meta<typeof TimelineView> = {
  title: "Components/TimelineView",
  component: TimelineView,
};

export default meta;
type Story = StoryObj<typeof TimelineView>;

const tasksArray: TimelineTask[] = [
  {
    id: "1",
    title: "Design UI",
    startDate: new Date(2025, 9, 1),
    endDate: new Date(2025, 9, 5),
    progress: 50,
    rowId: "r1",
  },
  {
    id: "2",
    title: "Develop API",
    startDate: new Date(2025, 9, 6),
    endDate: new Date(2025, 9, 10),
    progress: 30,
    rowId: "r2",
  },
];

const tasks: Record<string, TimelineTask> = Object.fromEntries(
  tasksArray.map((t) => [t.id, t])
);

const rows: TimelineRow[] = [
  { id: "r1", label: "Design Team", tasks: ["1"], rowId: "r1" },
  { id: "r2", label: "Backend Team", tasks: ["2"], rowId: "r2" },
];

export const Default: Story = {
  args: {
    rows,
    tasks,
    startDate: new Date(2025, 9, 1),
    endDate: new Date(2025, 9, 30),
    viewMode: "day",
  },
};
