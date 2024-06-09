import { createSlice } from "@reduxjs/toolkit";

export const { actions: uiActions, reducer: uiReducer } = createSlice({
  name: "ui",
  initialState: {
    isAsideOpen: false,
  },
  reducers: {
    toggleAside(state) {
      state.isAsideOpen = !state.isAsideOpen;
    },
  },
});
