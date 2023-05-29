import React, { useState } from "react";
import { Link } from "react-router-dom";

const IsPelendrome = () => {
  const [input, setInput] = useState("");
  const [outPut, setOutPut] = useState("");

  function checkPalindrome(e) {
    e.preventDefault();
    // find the length of a string
    const len = input.length;

    // loop through half of the string
    let myVal = "";
    for (let i = len - 1; i >= 0; i--) {
      myVal += input[i];
    }
    setInput("");
    if (myVal === input) {
      setOutPut(true);
      console.log("myval = ", myVal, "t input ", input);
    } else setOutPut(false);
    console.log("myval = ", myVal, " f input ", input);
    setInput("");
  }

  return (
    <>
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Link to="/">Home page</Link>
      </div>
      <h1>Check Pallindrome</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            // name={input}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </label>
        <button onClick={checkPalindrome}>Submit</button>
      </form>
      {outPut === "" ? (
        " "
      ) : outPut ? (
        <h2>Yes it's Pallindrome</h2>
      ) : (
        <h2>It's not Pallindrome</h2>
      )}
    </>
  );
};

export default IsPelendrome;
