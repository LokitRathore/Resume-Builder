import React, { useState } from "react";

const Inputoutput = () => {
  const [operator, setOperator] = useState();
  const [value1, setValue1] = useState();
  // const [value2, setValue2] = useState();
  const [result, setResult] = useState();

  const calculatOutPut = (operator) => {
    if (operator === "/") {
      setResult(parseInt(value1) / parseInt(value2));
    } else if (operator === "*") {
      setResult(parseInt(value1) * parseInt(value2));
    } else if (operator === "-") {
      setResult(parseInt(value1) - parseInt(value2));
    } else if (operator === "+") {
      setResult(parseInt(value1) + parseInt(value2));
    }
  };

  return (
    <div>
      <input
        placeholder="value1"
        id="value1"
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <br />
      {/* <input
        placeholder="value2"
        id="value2"
        onChange={(t) => {
          setValue2(t.target.value);
        }}
      /> */}
      <br />
      <button
        onClick={() => {
          setOperator("+");
        }}
      >
        Get result
      </button>
      <button
        onClick={() => {
          setOperator("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setOperator("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setOperator("/");
        }}
      >
        /
      </button>
      <p id="result">{result}</p>
    </div>
  );
};

export default Inputoutput;
