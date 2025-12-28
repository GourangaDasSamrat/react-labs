export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "cart/addToCart": {
      const product = state.find((item) => item.id === action.payload.id);

      return product
        ? state.map((item) => {
            if (item.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          })
        : [
            ...state,
            {
              ...action.payload,
              quantity: 1,
            },
          ];
    }
    case "cart/removeProduct": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "cart/modifyQuantity": {
      const updatedCart = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return state;
      });

      return updatedCart;
    }
    case "cart/clearCart": {
      return [];
    }
    default:
      return state;
  }
};
