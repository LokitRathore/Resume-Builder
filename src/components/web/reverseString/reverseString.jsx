import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReverseString = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState();
  useEffect(() => {
    checkPalindrome();
  }, [input]);

  console.log(input);
  function checkPalindrome() {
    const len = input.length;
    let myVal = "";
    for (let i = len - 1; i >= 0; i--) {
      // check if first and last string are same
      // console.log("myval = ", myVal, " i ",i)
      myVal += input[i];
      console.log(myVal);
    }
    setValue(myVal);
  }
  const resetInputField = () => {
    setInput("");
  };

  return (
    <div>
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Link to="/">Home page</Link>
      </div>

      <input
        type="text"
        placeholder="enter name"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={resetInputField}>Reset</button>
      <h1>
        Reverse of name is : <br /> {value}
      </h1>
    </div>
  );
};
export default ReverseString;
