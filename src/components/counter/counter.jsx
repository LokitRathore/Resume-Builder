import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <p id="counter">{value}</p>
      <input />
      <br />
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      {console.log(value)}
    </div>
  );
};

export default Counter;
