import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const modifyQuantity = createAction("cart/modifyQuantity");
export const removeProduct = createAction("cart/removeProduct");
export const clearCart = createAction("cart/clearCart");
