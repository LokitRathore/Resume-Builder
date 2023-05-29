import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CelToFer = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {
    if (celsius != "") {
      cToF();
    } else {
      setVal("");
    }
  }, [celsius]);
  useEffect(() => {
    if (fahrenheit != "" && celsius == "") {
      FtoC();
    } else {
      setVal("");
    }
  }, [fahrenheit]);

  function cToF() {
    // var cTemp = celsius;
    let cToFahr = (celsius * 9) / 5 + 32;
    setVal(cToFahr);
  }
  // console.log(cToF(36), "fah");

  function FtoC() {
    let celcius = (fahrenheit * 5) / 9 - 32;
    setVal(celcius);
    console.log(val);
  }

  if (celsius && fahrenheit != "") {
    console.log("probelm");
    setVal("");
  }
  // console.log(FtoC(20), "cel ");

  return (
    <div>
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Link to="/">Home page</Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Temp in celsious"
          onChange={(e) => {
            setCelsius(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Temp in fahrenheit"
          onChange={(e) => {
            setFahrenheit(e.target.value);
          }}
        />
      </div>
      <div>{celsius != "" ? <h3>{val} °C</h3> : <h3></h3>}</div>
      {fahrenheit != "" ? <h3>{val}°F</h3> : <h3></h3>}
    </div>
  );
};
export default CelToFer;
