import { uiReducer } from "@/modules/ui/slice";
import { todoReducer } from "@/modules/todo/slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { logRocketMiddleware } from "@/libs/logRocket";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      logRocketMiddleware(import.meta.env.VITE_LOG_ROCKET_ID)
    ),
});

setupListeners(store.dispatch);

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
