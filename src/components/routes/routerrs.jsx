import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/home";
import ContactUs from "./contactUs/contactUs";
import AboutMe from "./aboutMe/aboutMe";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactUs />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
};
export default MyRouter;
