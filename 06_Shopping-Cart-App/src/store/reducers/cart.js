import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer([], (builder) => {
  builder
    .addCase("cart/addToCart", (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      product
        ? (product.quantity += 1)
        : state.push({
            ...action.payload,
            quantity: 1,
          });
    })

    .addCase("cart/removeProduct", (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    })

    .addCase("cart/modifyQuantity", (state, action) => {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[productIndex].quantity = action.payload.quantity;
    })

    .addCase("cart/clearCart", () => []);
});
