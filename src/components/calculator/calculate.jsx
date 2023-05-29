import React, { useState } from "react";

const Inputoutput = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();
  const positive = () => {
    setResult(parseInt(value1) + parseInt(value2));
  };
  const negetive = () => {
    setResult(parseInt(value1) - parseInt(value2));
  };
  const multiplicaton = () => {
    setResult(parseInt(value1) * parseInt(value2));
  };
  const divide = () => {
    setResult(parseInt(value1) / parseInt(value2));
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
      <input
        placeholder="value2"
        id="value2"
        onChange={(t) => {
          setValue2(t.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          positive();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          negetive();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          multiplicaton();
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          divide();
        }}
      >
        /
      </button>
      <p id="result">{result}</p>
    </div>
  );
};

export default Inputoutput;
