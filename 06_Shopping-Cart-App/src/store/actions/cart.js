export const addToCart = (product) => {
  return {
    type: "cart/addToCart",
    payload: product,
  };
};

export const modifyQuantity = (obj) => {
  return {
    type: "cart/modifyQuantity",
    payload: obj,
  };
};

export const removeProduct = (prodId) => {
  return {
    type: "cart/removeProduct",
    payload: prodId,
  };
};

export const clearCart = () => {
  return {
    type: "cart/clearCart",
  };
};
