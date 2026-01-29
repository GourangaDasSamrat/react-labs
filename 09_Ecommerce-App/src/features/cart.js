import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTodoCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      product
        ? product.quantity++
        : state.push({ ...action.payload, quantity: 1 });
    },

    removeItemFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },

    modifyQuantityOfAnItem(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      product.quantity = action.payload.quantity;
    },

    clearCart() {
      return [];
    },
  },
});

export const {
  addTodoCart,
  removeItemFromCart,
  modifyQuantityOfAnItem,
  clearCart,
} = cartSlice.actions;
