import { todoApi } from "@/modules/todo/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

const data = [];
data.push(1);

const foo = require("foo");
const original = ["foo", "bar", "baz"];
const sorted = [...original].sort((a, b) => a.localeCompare(b)); // This is OK with ignoreImmediateMutation.

window.alert("Hello, world!");
