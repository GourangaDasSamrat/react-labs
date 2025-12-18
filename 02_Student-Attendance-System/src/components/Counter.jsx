import { useReducer } from "react";

const counterReducer = (state, action) => {
  if (action === "Increase") {
    return state + 1;
  }
  if (action === "Decrease") {
    return state - 1;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p>The counter is {counter}</p>
      <button onClick={() => dispatch("Increase")}>Increase by 1</button>
      <button onClick={() => dispatch("Decrease")}>Decrease by 1</button>
    </div>
  );
};

export default Counter;
