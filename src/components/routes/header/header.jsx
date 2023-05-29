import React from "react";
import "../../../styles.css";
import { Link } from "react-router-dom";
import MyRouter from "../routerrs";

const MyHader = () => {
  return (
    <div>
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">Home</Link>
          <Link to="/aboutme">about me</Link>
          <Link to="/contactme">contact me</Link>
        </div>
        <div>{MyRouter()} </div>
      </header>
    </div>
  );
};

export default MyHader;
