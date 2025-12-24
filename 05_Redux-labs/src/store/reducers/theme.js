const initState = {
  bgColor: "#fff",
  textColor: "#000",
};

export const themeReducer = (state = initState, action) => {
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
