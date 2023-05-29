import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResHeader from "../../ResumeHome/header";
import Skills from "../skills";

const WorkData = () => {
  const [experiance, setExperiance] = useState("");
  const location = useLocation();
  const { contact, objective, Education } = location.state;

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
      </form>
      <hr />

      <form>
        <div>
          <h1>Experiance</h1>
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Name of organization
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            onChange={(e) =>
              setExperiance({ ...experiance, Company: e.target.value })
            }
            placeholder="company"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Desingnation
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            onChange={(e) =>
              setExperiance({
                ...experiance,
                jobTitle: e.target.value
              })
            }
            placeholder="Job Title"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Start date
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            onChange={(e) =>
              setExperiance({
                ...experiance,
                WorkingFrom: e.target.value
              })
            }
            placeholder="Start date"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            End date
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            onChange={(e) =>
              setExperiance({
                ...experiance,
                WorkingTo: e.target.value
              })
            }
            placeholder="end data/present"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">
            Discription
          </label>
          <input
            style={{ width: "500px" }}
            className="form-control"
            type="textarea"
            onChange={(e) =>
              setExperiance({
                ...experiance,
                description: e.target.value
              })
            }
            placeholder="Discription"
          />
        </div>
      </form>
      <div className="buttons">
        <div>
          <Link to="/Education">
            <button>Prev</button>
          </Link>
        </div>
        <div>
          <Link
            to="/Project"
            state={{
              contact: contact,
              objective: objective,
              Education: Education,
              experiance: experiance
            }}
          >
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WorkData;
