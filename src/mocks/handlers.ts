import { Todo, TodosResponse, TodoResponse } from "./../modules/todo/type";
import { db } from "./db";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get<Record<string, string>, Record<string, string>, TodosResponse>(
    "/todos",
    () => {
      const todos = db.todo.getAll().reverse();

      return HttpResponse.json({
        type: "todo",
        status: 200,
        data: todos as TodosResponse["data"],
      });
    }
  ),
  http.get<{ id: string }, Todo, TodoResponse>("/todo/:id", ({ params }) => {
    const { id } = params;
    const data = db.todo.findFirst({ where: { id: { equals: id } } }) as Todo;
    return HttpResponse.json({
      type: "todo",
      status: 200,
      data,
    });
  }),
  http.post<{ id: string }, Todo, TodoResponse>(
    "/todo",
    async ({ request }) => {
      const todo = await request.json();
      const data = db.todo.create({
        id: String(db.todo.getAll().length + 1),
        title: todo.title,
        status: todo.status,
        description: todo.description,
        deadline: todo.deadline,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }) as Todo;
      return HttpResponse.json({ type: "todo", status: 201, data });
    }
  ),
  http.put<{ id: string }, Todo, TodoResponse>(
    "/todo/:id",
    async ({ request, params }) => {
      const { id } = params;
      const todo = await request.json();
      const data = db.todo.update({
        where: { id: { equals: id } },
        data: {
          title: todo.title,
          status: todo.status,
          description: todo.description,
          deadline: todo.deadline,
          updated_at: new Date().toISOString(),
        },
      }) as Todo;
      return HttpResponse.json({ type: "todo", status: 204, data });
    }
  ),
  http.delete<{ id: string }, Todo, TodoResponse>("/todo/:id", ({ params }) => {
    const { id } = params;
    const data = db.todo.delete({ where: { id: { equals: id } } }) as Todo;
    return HttpResponse.json({
      type: "todo",
      status: 200,
      data,
    });
  }),
];
