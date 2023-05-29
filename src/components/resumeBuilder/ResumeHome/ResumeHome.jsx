import React from "react";
import { Link } from "react-router-dom";
import AdressData from "../ResumeItems/adressData/Adress";
import Education from "../ResumeItems/education";
import ContactDetails from "../ResumeItems/NameDataIs/contact";
import Objective from "../ResumeItems/NameDataIs/objective";
import Skills from "../ResumeItems/skills";
import WorkData from "../ResumeItems/work/work";
import ResHeader from "./header";
import ".././ReseumeView/style.css";

const ResumeHome = () => {
  return (
    <div>
      <div>
        <ResHeader />
      </div>
      <div className="container">
        <div>
          <h1 className={"FrontFlexLeft"}>
            Make your <span className="text-success"> resume </span> With us
            it's fully free
          </h1>
          <h1 className={"FrontFlexLeft"}>
            Let's <span className="text-success"> Rock</span> With Your Resume
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div style={{ padding: "15px" }}>
              <h1
                style={{
                  marginRight: "10px",
                  color: "red",
                  fontWeight: "bolder"
                }}
              >
                Click on
              </h1>
              <br />
              <Link to="/contact">
                <img
                  style={{ marginRight: "10px" }}
                  src="https://cdn-icons-png.flaticon.com/128/556/556181.png"
                  alt=""
                />
              </Link>
            </div>{" "}
            <Link to="/contact">
              {/* <h1> Start Resume</h1> */}
              <img
                src="data:image/png;base64,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"
                // class="img-fluid"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <div>
          <img
            style={{ width: "200%", height: "100%", paddingLeft: "120px" }}
            src="data:image/png;base64,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"
            // class="img-fluid"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
export default ResumeHome;
