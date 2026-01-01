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
      // Filter out items with quantity 0 or less
      const updatedCart = state
        .map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item; // FIX: Changed from 'state' to 'item'
        })
        .filter((item) => item.quantity > 0); // Remove items with 0 or negative quantity

      return updatedCart;
    }

    case "cart/clearCart": {
      return [];
    }

    default:
      return state;
  }
};
