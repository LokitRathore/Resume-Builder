import React from "react";
import { Link } from "react-router-dom";

const WebHome = () => {
  return (
    <div>
      <div style={{ justifyContent: "center" }}>
        <h1>its home page</h1>
        <div className="row g-3">
          {/* <div className="row g-3" > */}
          <Link to="/isPalendrom">
            <h5>check pelendrom</h5>
          </Link>

          <Link to="/cToF">
            <h5>C to F</h5>
          </Link>
          {/* </div> */}
          {/* <div className="row g-3"> */}
          <Link to="/reverse">
            <h5>Reverse Name</h5>
          </Link>
          <Link to="/findPrime">
            <h5>Is Prime</h5>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default WebHome;
