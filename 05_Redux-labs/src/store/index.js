import { combineReducers, createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "counter/increment":
      return state + action.payload;
    case "counter/decrement":
      return state - action.payload;
    default:
      return state;
  }
};

const initState = {
  bgColor: "#fff",
  textColor: "#000",
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case "theme/CHANGE_BG_COLOR":
      return {
        ...state,
        bgColor: action.payload,
      };
    case "theme/CHANGE_TEXT_COLOR":
      return {
        ...state,
        textColor: action.payload,
      };
    case "theme/RESET":
      return initState;
    default:
      return state;
  }
};

const root = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = createStore(root);
