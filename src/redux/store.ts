import { configureStore } from "@reduxjs/toolkit";
import { arcticleReducer } from "./slices/articleSlice";

const store = configureStore({
  reducer: {
    article: arcticleReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export { store };
