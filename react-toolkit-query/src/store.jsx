import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fakestoreApi } from "./service/pokemon";

export const store = configureStore({
  reducer: {
    [fakestoreApi.reducerPath]: fakestoreApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakestoreApi.middleware),
});

setupListeners(store.dispatch);
