export const paths = {
  home: "/home",
  todos: "/todos",
  todo: "/todos/:id",
  calendar: "/calendar",
  stats: "/stats",
} as const;

export type Path = (typeof paths)[keyof typeof paths];
