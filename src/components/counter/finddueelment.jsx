import React, { useEffect, useState } from "react";

const FindDueElemeent = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();
  const [ar, setAr] = useState([]);
  const start = parseInt(value1);
  const endval = parseInt(value2);
  const final = () => {
    for (let i = start; i <= endval; i++) {
      // findprime(i)
      if (findprime(i)) {
        setAr((ar) => [...ar, i]);
      }
    }
  };

  function findprime(num) {
    for (let i = 2; i < num / 2 + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <div>
      <input
        placeholder="value1"
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />{" "}
      <br />
      <input
        placeholder="value2"
        onChange={(t) => {
          setValue2(t.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          final();
        }}
      >
        Get Ans
      </button>
      <h3>Result : </h3>
      {ar.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default FindDueElemeent;
