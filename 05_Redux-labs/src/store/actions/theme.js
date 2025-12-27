export const changeBgColor = (bgColor) => {
  return {
    type: "theme/CHANGE_BG_COLOR",
    payload: bgColor,
  };
};
export const changeTextColor = (textColor) => {
  return {
    type: "theme/CHANGE_TEXT_COLOR",
    payload: textColor,
  };
};

export const resetThem=()=> {
   return{ type:'theme/RESET'}
}