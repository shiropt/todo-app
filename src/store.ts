import { uiReducer } from "@/modules/ui/slice";
import { todoReducer } from "@/modules/todo/slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    ui: uiReducer,
  },
});

setupListeners(store.dispatch);

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
