import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResHeader from "../ResumeHome/header";
import WorkData from "./work/work";

const Education = () => {
  const [education, setEducation] = useState("");
  const location = useLocation();
  const { contact, objective } = location.state;

  return (
    <div>
      <div>
        <ResHeader />
      </div>

      <form style={{ margin: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "yellowgreen"
          }}
        >
          <div
            style={{
              padding: "auto",
              paddingLeft: "20px",
              paddingTop: "2px"
            }}
          >
            <div>
              <h4 className="contactname">contact{contact.Name}</h4>
            </div>
            <div className="contact p">
              <p> my title{contact.MyTitle}</p>
            </div>
            <div className="contact p">
              <p> mobile{contact.Mobile}</p>
            </div>
          </div>
          <div style={{ padding: "auto", paddingRight: "20px" }}>
            <div className="contact p">
              <p> email id{contact.Emailid}</p>
            </div>
            <div className="contact p">
              <p> github{contact.Github}</p>
            </div>
            <div className="contact p">
              <p> linkedin{contact.Linkdin}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Object</h4>
          <p>{objective}</p>
        </div>
      </form>
      <hr />

      <form>
        <h1>Education</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            institute name
          </label>
          <br />
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            onChange={(e) =>
              setEducation({ ...education, institute: e.target.value })
            }
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Year of psssing
          </label>
          <br />
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            onChange={(e) =>
              setEducation({ ...education, YearOfPass: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Grade
          </label>
          <br />
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            onChange={(e) =>
              setEducation({ ...education, Grade: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Examination
          </label>
          <br />
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            onChange={(e) =>
              setEducation({ ...education, examination: e.target.value })
            }
          />
        </div>
      </form>
      <div className="buttons">
        <div>
          <Link to="/objectiv">
            <button>Prev</button>
          </Link>
        </div>
        <div>
          <Link
            to="/experiance"
            state={{
              contact: contact,
              objective: objective,
              Education: education
            }}
          >
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Education;
