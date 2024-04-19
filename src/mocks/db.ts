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
