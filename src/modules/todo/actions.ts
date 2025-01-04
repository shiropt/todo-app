import { todoActions } from "@/modules/todo/slice";
import { Todo } from "@/modules/todo/type";
import { Dispatch } from "@/store";

const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const fetchTodoList = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  const json = await response.json();
  return json;
};

export const deleteTodo = async (id: string, dispatch: Dispatch) => {
  const response = await fetch(`${baseUrl}/todo/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  const json = await response.json();
  dispatch(todoActions.deleteTodo(json.data.id));
};

export const postTodo = async (todo: Todo, dispatch: Dispatch) => {
  const response = await fetch(`${baseUrl}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Failed to post todo");
  const json = await response.json();
  dispatch(todoActions.addTodo(json.data));
};

export const updateTodo = async (todo: Todo, dispatch: Dispatch) => {
  const response = await fetch(`${baseUrl}/todo/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Failed to update todo");
  const json = await response.json();
  dispatch(todoActions.updateTodo(json.data));
};
