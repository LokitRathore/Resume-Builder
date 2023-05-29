import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResHeader from "../../ResumeHome/header";

const ResProject = () => {
  const [ResProject, setResProject] = useState({});
  const location = useLocation();
  const { contact, objective, Education, experiance } = location.state;
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
      </form>
      <hr />

      <form>
        <div>
          <h1>Project:</h1>
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Name of project
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            placeholder="Name of project"
            onChange={(e) =>
              setResProject({ ...ResProject, NameOfProject: e.target.value })
            }
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Clint Name
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            placeholder="Clint"
            onChange={(e) =>
              setResProject({ ...ResProject, ProjectFor: e.target.value })
            }
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Start date
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            placeholder="Start date of project"
            onChange={(e) =>
              setResProject({ ...ResProject, ProjectStartDate: e.target.value })
            }
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            End date
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            placeholder="End date of project"
            onChange={(e) =>
              setResProject({ ...ResProject, ProjectEndDate: e.target.value })
            }
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Discription
          </label>
          <textarea
            style={{ width: "500px" }}
            className="form-control"
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setResProject({
                ...ResProject,
                DescriptionOfProject: e.target.value
              })
            }
          />
        </div>
      </form>
      <div className="buttons">
        <div>
          <Link to="/experiance">
            <button>Prev</button>
          </Link>
        </div>
        <div>
          <Link
            to="/Skills"
            state={{
              contact: contact,
              objective: objective,
              Education: Education,
              experiance: experiance,
              ResProject: ResProject
            }}
          >
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResProject;
