export const increment = (payload) => {
  return {
    type: "counter/increment",
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "counter/decrement",
    payload,
  };
};
