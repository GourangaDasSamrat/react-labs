import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  changeBgColor,
  changeTextColor,
  decrement,
  increment,
  resetThem,
} from "./store/actions";

const App = () => {
  const counter = useSelector((storeState) => storeState.counter);
  const theme = useSelector((storeState) => storeState.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <div>
        <p>The value of counter is {counter}</p>
        <button type="button" onClick={() => dispatch(increment(1))}>
          Increment by 1
        </button>
        <button type="button" onClick={() => dispatch(decrement(1))}>
          Decrement by 1
        </button>
        <button type="button" onClick={() => dispatch(increment(5))}>
          Increment by 5
        </button>
        <button type="button" onClick={() => dispatch(decrement(5))}>
          Decrement by 5
        </button>
      </div>
      <br />
      <div>
        <div>
          <button
            type="button"
            onClick={() => dispatch(changeBgColor("tomato"))}
          >
            Change bg color to tomato
          </button>
          <button
            type="button"
            onClick={() => dispatch(changeBgColor("purple"))}
          >
            Change bg color to purple
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => dispatch(changeTextColor("tomato"))}
          >
            Change text color to tomato
          </button>
          <button
            type="button"
            onClick={() => dispatch(changeTextColor("purple"))}
          >
            Change text color to purple
          </button>
          <button type="button" onClick={() => dispatch(resetThem())}>
            Reset theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
