import { todoApi } from "@/modules/todo/api";
import { uiReducer } from "@/modules/ui/slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    ui: uiReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
