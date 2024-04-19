import { Todo, TodosResponse, TodoResponse } from "./../modules/todo/type";
import { db } from "./db";
import { http, HttpResponse } from "msw";

for (let i = 1; i <= 100; i++) {
  db.todo.create({
    id: String(i),
    title: `タスク #${i}`,
    status: Math.floor(Math.random() * 3),
    description: `これはタスク #${i} の説明です。`,
    deadline: `2024-12-${String((i % 30) + 1).padStart(2, "0")}`, // 月の日付を模倣
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
}

export const handlers = [
  http.get<Record<string, string>, Record<string, string>, TodosResponse>(
    "/todos",
    () => {
      const todos = db.todo.getAll();

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
