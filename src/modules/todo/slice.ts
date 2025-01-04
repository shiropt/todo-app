import { Todo } from "@/modules/todo/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const { actions: todoActions, reducer: todoReducer } = createSlice({
  name: "todoList",
  initialState: {
    todoList: [] as Todo[],
  },
  reducers: {
    setTodoList(state, action: PayloadAction<Todo[]>) {
      state.todoList = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todoList.push(action.payload);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index] = action.payload;
    },
    deleteTodo(state, action: PayloadAction<Todo["id"]>) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});
