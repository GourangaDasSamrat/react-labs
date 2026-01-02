import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      product
        ? (product.quantity += 1)
        : state.push({
            ...action.payload,
            quantity: 1,
          });
    },

    clearCart() {
      return [];
    },

    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    modifyQuantity(state, action) {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[productIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, modifyQuantity, removeProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
