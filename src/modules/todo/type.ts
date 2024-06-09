export const todoStatus = {
  0: { label: "In Progress", color: "orange" },
  1: { label: "Complete", color: "green" },
  2: { label: "Stay", color: "blue" },
} as const;

export const STATUS = {
  IN_PROGRESS: 0,
  COMPLETE: 1,
  STAY: 2,
} as const;

export type Status = (typeof todoStatus)[keyof typeof todoStatus]["label"];

export type Todo = {
  id: string;
  title: string;
  status: keyof typeof todoStatus;
  description: string;
  deadline: string;
  created_at: string;
  updated_at: string;
};

export type TodoResponse = {
  type: string;
  status: number;
  data: Todo;
};
export type TodosResponse = {
  type: string;
  status: number;
  data: Todo[];
};
