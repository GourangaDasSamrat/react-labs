import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const counter = useSelector((storeState) => storeState);
  const dispatch = useDispatch();

  const handleIncrease = (payload) => {
    dispatch({ type: "counter/increment", payload: payload });
  };
  const handleDecrease = (payload) => {
    dispatch({ type: "counter/decrement", payload: payload });
  };
  return (
    <div>
      <p>The value of counter is {counter}</p>
      <button type="button" onClick={() => handleIncrease(1)}>
        Increment by 1
      </button>
      <button type="button" onClick={() => handleDecrease(1)}>
        Decrement by 1
      </button>
      <button type="button" onClick={() => handleIncrease(5)}>
        Increment by 5
      </button>
      <button type="button" onClick={() => handleDecrease(5)}>
        Decrement by 5
      </button>
    </div>
  );
};

export default App;
