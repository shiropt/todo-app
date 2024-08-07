import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
    status: Number,
    description: String,
    deadline: String,
    created_at: String,
    updated_at: String,
  },
});

for (let i = 1; i <= 10; i++) {
  db.todo.create({
    id: String(i),
    title: `タスク #${i}`,
    status: Math.floor(Math.random() * 3),
    description: `これはタスク #${i} の説明です。`,
    deadline: new Date().toISOString(), // 月の日付を模倣
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
}
