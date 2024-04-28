import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { db } from "./db";

export const server = setupServer(...handlers);

server.listen();

afterEach(() => {
  db.todo.deleteMany({ where: {} });
});
