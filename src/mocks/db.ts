import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
    status: Number,
    description: String,
    deadline: String,
    createdAt: String,
    updatedAt: String,
  },
});
