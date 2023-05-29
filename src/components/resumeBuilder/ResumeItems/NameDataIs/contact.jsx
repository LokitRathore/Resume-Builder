import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResHeader from "../../ResumeHome/header";
import ResumeRotes from "../../resumeRoute/ResumeRoutes";
import Education from "../education";

const ContactDetails = () => {
  const [contact, setContact] = useState({});

  return (
    <div>
      <div>
        <ResHeader />
      </div>
      <form>
        <div style={{ paddingLeft: "40% " }}>
          <div>
            <h4>Personal Details</h4>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full name
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="Full name"
              onChange={(e) => setContact({ ...contact, Name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Education title(ex- software engineer)
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="Education title"
              onChange={(e) =>
                setContact({ ...contact, MyTitle: e.target.value })
              }
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Contact Number
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="Contact number"
              onChange={(e) =>
                setContact({ ...contact, Mobile: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="E-mail id"
              onChange={(e) =>
                setContact({ ...contact, Emailid: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Linkdin profile
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="Linkdin"
              onChange={(e) =>
                setContact({ ...contact, Linkdin: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Github link
            </label>
            <br />
            <input
              style={{ width: "500px" }}
              className="form-control"
              type="text"
              placeholder="Git-hub"
              onChange={(e) =>
                setContact({ ...contact, Github: e.target.value })
              }
            />
          </div>
        </div>

        <div className="buttons">
          <Link to="/objectiv" state={{ contact: contact }}>
            <button>next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default ContactDetails;
