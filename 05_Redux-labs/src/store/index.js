import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "counter/increment":
      return state + action.payload;
    case "counter/decrement":
      return state + action.payload;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
