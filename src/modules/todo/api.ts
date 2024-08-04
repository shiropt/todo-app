import { Todo, TodosResponse } from "@/modules/todo/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ENDPOINT }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getTodoList: build.query<TodosResponse, string>({
      query: () => ({ url: `todos`, method: "GET" }),
      providesTags: ["Todo"],
    }),
    getTodo: build.query<Todo, string>({
      query: (id) => ({ url: `todo/${id}`, method: "GET" }),
    }),
    postTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: build.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "PUT",
        body: { ...body, id: undefined },
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: build.mutation<Todo, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
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
