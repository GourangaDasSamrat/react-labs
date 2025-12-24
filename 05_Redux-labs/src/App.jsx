import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const counter = useSelector((storeState) => storeState.counter);
  const theme = useSelector((storeState) => storeState.theme);
  const dispatch = useDispatch();

  const handleIncrease = (payload) => {
    dispatch({ type: "counter/increment", payload: payload });
  };
  const handleDecrease = (payload) => {
    dispatch({ type: "counter/decrement", payload: payload });
  };
  const handleChangeBG = (payload) => {
    dispatch({ type: "theme/CHANGE_BG_COLOR", payload: payload });
  };
  const handleChangeText = (payload) => {
    dispatch({ type: "theme/CHANGE_TEXT_COLOR", payload: payload });
  };
  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
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
      <br />
      <div>
        <div>
          <button type="button" onClick={() => handleChangeBG("tomato")}>
            Change bg color to tomato
          </button>
          <button type="button" onClick={() => handleChangeBG("purple")}>
            Change bg color to purple
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleChangeText("tomato")}>
            Change text color to tomato
          </button>
          <button type="button" onClick={() => handleChangeText("purple")}>
            Change text color to purple
          </button>
          <button type="button" onClick={dispatch({ type: "theme/RESET" })}>
            Reset theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
