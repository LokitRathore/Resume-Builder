import React from "react";
import { Route, Routes } from "react-router-dom";
import CelToFer from "../celToFer/celToFer";
import WebHome from "../homePage/homePage";
// import { Routes, Route } from "react-router-dom";
import IsPelendrome from "../isPalendrom/isPelen";
import FindPrime from "../primeNumber/primeNum";
import ReverseString from "../reverseString/reverseString";

const MyWebRouter = () => {
  return (
    <div>
      <Routes style={{ justifyContent: "center" }}>
        <Route path="/" element={<WebHome />} />
        <Route path="/isPalendrom" element={<IsPelendrome />} />
        <Route path="/findPrime" element={<FindPrime />} />
        <Route path="/reverse" element={<ReverseString />} />
        <Route path="/cToF" element={<CelToFer />} />
        <Route />
      </Routes>
    </div>
  );
};
export default MyWebRouter;
