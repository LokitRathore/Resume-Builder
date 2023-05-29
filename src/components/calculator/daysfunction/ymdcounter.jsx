import React, { useEffect, useState } from "react";

const Ymdcounterfun = () => {
  const [days, setDays] = useState(0);
  const [result, setResult] = useState(0);
  const [month, setMonths] = useState();
  const [rdays, setRemDays] = useState(0);

  const final = () => {
    setResult(days);
    // setResult(days/daysInWeek)
  };

  useEffect(() => {
    setResult(Math.trunc(days / 365));
  }, [rdays]);

  useEffect(() => {
    setMonths(Math.trunc((days - result * 365) / 30));
  }, [result]);
  useEffect(() => {
    setRemDays(Math.trunc(days - month * 30 - result * 365));
  }, [month, result]);

  return (
    <div>
      <input
        id="numOfDays"
        onChange={(e) => {
          setDays(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setRemDays();
        }}
      >
        +
      </button>
      <h3 id="result">No of years: {result}</h3>
      <p id="result">No of months: {month}</p>
      <p id="result">No of remainingdays: {rdays}</p>
    </div>
  );
};

export default Ymdcounterfun;
