import { Todo, TodosResponse } from "@/modules/todo/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getTodoList: build.query<TodosResponse, string>({
      query: () => ({ url: `todos`, method: "GET" }),
    }),
    getTodo: build.query<Todo, string>({
      query: (id) => ({ url: `todo/${id}`, method: "GET" }),
    }),
    postTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todo`,
        method: "POST",
        body,
      }),
    }),
    updateTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteTodo: build.mutation<Todo, string>({
      query: (id) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useGetTodoQuery,
  usePostTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
