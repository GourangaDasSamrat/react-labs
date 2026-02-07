"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  return (
    <div>
      <p>The value of the counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase by 1</button>
      <button onClick={() => setCounter(counter - 11)}>Decrease by 1</button>
    </div>
  );
};

export default Counter;
