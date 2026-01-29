import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
