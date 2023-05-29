import React from "react";
import { Link } from "react-router-dom";
import MyWebRouter from "./MyRoute";

const WebHeader = () => {
  return (
    <div>
      {/* yes */}
      <div className="align-items-center">
        <Link to="/">{/* <h5>Home Page</h5> */}</Link>
      </div>

      <div style={{ display: "grid", justifyContent: "center" }}>
        {MyWebRouter()}
      </div>
    </div>
  );
};

export default WebHeader;
