import React, { useState } from "react";

const AdressData = () => {
  const [houseNum, setHouseNum] = useState("");
  const [city, setCity] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [state, setState] = useState("");
  const [checked, setChecked] = useState(false);

  function submit() {
    setChecked(true);
  }

  return (
    <div>
      <h1>Address :</h1>
      <div>
        <input
          style={{ width: "500px" }}
          className="$form-control input-lg"
          type="text"
          placeholder="House number"
          onChange={(e) => setHouseNum(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{ width: "500px" }}
          className="$form-control input-lg"
          type="text"
          placeholder="Street number"
          onChange={(e) => setStreetNum(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{ width: "500px" }}
          className="$form-control input-lg"
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{ width: "500px" }}
          className="$form-control input-lg"
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div>{checked ? "" : <button onClick={submit}>submit</button>}</div>
      <div>{checked ? <Education /> : ""}</div>
    </div>
  );
};
export default AdressData;
