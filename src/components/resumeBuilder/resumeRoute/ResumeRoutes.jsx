import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import FinalView from "../ReseumeView/view";
import ResumeHome from "../ResumeHome/ResumeHome";
import AdressData from "../ResumeItems/adressData/Adress";
import Curricular from "../ResumeItems/curricular";
import Education from "../ResumeItems/education";
import ContactDetails from "../ResumeItems/NameDataIs/contact";
import Objective from "../ResumeItems/NameDataIs/objective";

import Skills from "../ResumeItems/skills";
import ResProject from "../ResumeItems/work/project";
import WorkData from "../ResumeItems/work/work";
// import AdressData from "./components/resumeBuilder/ResumeItems/AdressData"

const ResumeRotes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ResumeHome />}></Route>
        <Route path="/contact" element={<ContactDetails />}></Route>
        <Route path="/objectiv" element={<Objective />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/experiance" element={<WorkData />}></Route>
        <Route path="/Project" element={<ResProject />}></Route>
        <Route path="/Curricular" element={<Curricular />}></Route>
        <Route path="/FinalView" element={<FinalView />}></Route>
        <Route path="/ResumeView" element={<FinalView />}></Route>
      </Routes>
    </div>
  );
};
export default ResumeRotes;
