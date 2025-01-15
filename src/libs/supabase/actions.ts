import { todoActions } from "@/modules/todo/slice";
import { Todo } from "@/modules/todo/type";
import { Dispatch } from "@/store";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const fetchTodos = async () => {
  const { data, error } = await supabase.from("todos").select("*").order("id");
  if (error) throw new Error("Failed to fetch todos");
  return data;
};

export const deleteTodo = async (id: string, dispatch: Dispatch) => {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error("Failed to delete todo");
  dispatch(todoActions.deleteTodo(data.id));
};

export const postTodo = async (todo: Todo, dispatch: Dispatch) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, created_at, updated_at, ...payload } = todo;
  const { data, error } = await supabase
    .from("todos")
    .insert([payload])
    .select()
    .single();
  if (error) throw new Error("Failed to post todo");
  dispatch(todoActions.addTodo(data));
};

export const updateTodo = async (todo: Todo, dispatch: Dispatch) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, created_at, updated_at, ...payload } = todo;

  const { data, error } = await supabase
    .from("todos")
    .update(payload)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error("Failed to update todo");
  dispatch(todoActions.updateTodo(data));
};
