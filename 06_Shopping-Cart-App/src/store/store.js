import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";

const rootReducer = {
  cart: cartReducer,
};

export const store = configureStore({ reducer: rootReducer });
