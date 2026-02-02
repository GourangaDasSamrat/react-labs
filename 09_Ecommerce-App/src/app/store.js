import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, cartSlice } from "../features";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
