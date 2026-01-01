import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  modifyQuantity,
  removeProduct,
} from "../actions/cart";

export const cartReducer = createReducer([], (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      product
        ? (product.quantity += 1)
        : state.push({
            ...action.payload,
            quantity: 1,
          });
    })

    .addCase(removeProduct, (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    })

    .addCase(modifyQuantity, (state, action) => {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[productIndex].quantity = action.payload.quantity;
    })

    .addCase(clearCart, () => []);
});
