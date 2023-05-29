import React, { useState } from "react";

const EduComponent = () => {
  const [education, setEducation] = useState({});
  const [edArr, setEdArr] = useState([]);

  const handleNext = () => {
    console.log(education);
    setEdArr([...setEdArr, education]);
    setEducation("");

    console.log("edarr ", education);
    return <EduComponent />;
  };
  return (
    <div>
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
      <button onClick={handleNext}>next</button>
    </div>
  );
};
export default EduComponent;
