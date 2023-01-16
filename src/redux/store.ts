import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./slices/articleSlice";

const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export { store };
