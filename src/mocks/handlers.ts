import { db } from "./db";

for (let i = 1; i <= 100; i++) {
  db.todo.create({
    id: String(i),
    title: `タスク #${i}`,
    status: Math.floor(Math.random() * 3),
    description: `これはタスク #${i} の説明です。`,
    deadline: `2024-12-${String((i % 30) + 1).padStart(2, "0")}`, // 月の日付を模倣
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export const handlers = [...db.todo.toHandlers("rest")];
