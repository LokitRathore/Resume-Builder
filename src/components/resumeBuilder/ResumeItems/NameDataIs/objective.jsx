import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinalView from "../../ReseumeView/view";
import ResHeader from "../../ResumeHome/header";

const Objective = () => {
  const [object, setObject] = useState("");
  const location = useLocation();
  const { contact } = location.state;

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
              <h4 className="contactname">{contact.Name}</h4>
            </div>
            <div className="contact p">
              <p>{contact.MyTitle}</p>
            </div>
            <div className="contact p">
              <p>{contact.Mobile}</p>
            </div>
          </div>
          <div style={{ padding: "auto", paddingRight: "20px" }}>
            <div className="contact p">
              <p> {contact.Emailid}</p>
            </div>
            <div className="contact p">
              <p>{contact.Github}</p>
            </div>
            <div className="contact p">
              <p>{contact.Linkdin}</p>
            </div>
          </div>
        </div>
      </form>

      <hr />

      <div>
        <h1>Objective</h1>
        <div>
          <textarea
            className="form-control"
            placeholder="Objective"
            style={{ width: "90%" }}
            onChange={(e) => setObject(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
      </div>
      <div className="buttons">
        <div>
          <Link to="/contact">
            <button>Prev</button>
          </Link>
        </div>
        <div>
          <Link to="/Education" state={{ contact: contact, objective: object }}>
            <button>next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Objective;
