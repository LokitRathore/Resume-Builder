import React from "react";
import EduComponent from "./components/resumeBuilder/ReseumeView/eduDetails/eduDetails";
import ResumeHome from "./components/resumeBuilder/ResumeHome/ResumeHome";
import ResumeLinks from "./components/resumeBuilder/resumeRoute/ResumeLink";
import ResumeRotes from "./components/resumeBuilder/resumeRoute/ResumeRoutes";
import MyTudo from "./components/toduList/todu/Tudu";
import WebHeader from "./components/web/headerofeb/headerWeb";

import "./styles.css";

export default function App() {
  return (
    <>
      {/* <ResumeLinks /> */}
      <EduComponent />

      {/* <ResumePersonalDetails /> */}
    </>
  );
}
