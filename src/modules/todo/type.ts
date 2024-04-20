const todoStatus = {
  DOING: 0,
  DONE: 1,
  HOLD: 2,
} as const;

type Status = (typeof todoStatus)[keyof typeof todoStatus];

export type Todo = {
  id: string;
  title: string;
  status: Status;
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
