import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + action.payload;
    case "decrease":
      return state - action.payload;
    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p>The counter is {counter}</p>
      <button
        onClick={() =>
          dispatch({
            type: "increase",
            payload: 1,
          })
        }
      >
        Increase by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrease",
            payload: 1,
          })
        }
      >
        Decrease by 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increase",
            payload: 5,
          })
        }
      >
        Increase by 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrease",
            payload: 5,
          })
        }
      >
        Decrease by 5
      </button>
    </div>
  );
};

export default Counter;
