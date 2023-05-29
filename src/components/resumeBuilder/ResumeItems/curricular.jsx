import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResHeader from "../ResumeHome/header";

const Curricular = () => {
  const [curricular, setCurricular] = useState();
  const location = useLocation();
  const {
    contact,
    objective,
    Education,
    experiance,
    ResProject,
    mySkill
  } = location.state;
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
        <div>
          <div>
            <h4>Education :</h4>
          </div>
          <div>
            <table className="table table-bordered">
              <thead>
                <td>Year</td>
                <td>Degree/Examination</td>
                <td>Institution/board</td>
                <td>CGPA/Percentage</td>
              </thead>
              <tr>
                <td>year {Education.YearOfPass}</td>
                <td> examination{Education.examination}</td>
                <td> institute{Education.institute} </td>
                <td> Grade{Education.Grade} </td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div>
            <h4>Experiance:</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>Organization: {experiance.Company} </h5>
            <p>Desingnation: {experiance.jobTitle}</p>

            <div style={{ paddingRight: "20px" }}>
              startdate{experiance.WorkingFrom} - endate{experiance.WorkingTo}{" "}
            </div>
            <div></div>
          </div>
          <div>
            <p>description{experiance.description}</p>
          </div>
        </div>

        <div>
          <div>
            <h4>Project:</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>NameOfProject: {ResProject.NameOfProject} </h5>
            <p>ProjectFor: {ResProject.ProjectFor}</p>

            <div style={{ paddingRight: "20px" }}>
              startdate{ResProject.ProjectStartDate} - endate
              {ResProject.ProjectEndDate}{" "}
            </div>
            <div></div>
          </div>
          <div>
            <p>description{ResProject.DescriptionOfProject}</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Skills</h4>
          </div>
          <p>{mySkill}</p>
        </div>
      </form>
      <hr />

      <form>
        <div>
          <h1>Add Curricular Activity</h1>
        </div>
        <div class="mb-3">
          <textarea
            style={{ width: "500px" }}
            placeholder="Add your curricular activity"
            className="$form-control input-lg"
            onChange={(e) => setCurricular(e.target.value)}
          />
        </div>
      </form>
      <div className="buttons">
        <div>
          <Link to="/Curricular">
            <button>Next</button>
          </Link>
        </div>
        <div>
          <Link
            to="/FinalView"
            state={{
              contact: contact,
              objective: objective,
              Education: Education,
              experiance: experiance,
              ResProject: ResProject,
              mySkill: mySkill,
              myCurricular: curricular
            }}
          >
            <button>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Curricular;
