import axios from "axios";
import React, { useState } from "react";
const apiCallIs = "https://jsonplaceholder.typicode.com/posts";

const ApiIs = () => {
  const [result, setResult] = useState([]);

  function getResult() {
    axios
      .get(
        apiCallIs
        //   , {
        //   userId: 103,
        //   id: 101,
        //   title: "new id is here",
        //   body: "yeh its here"
        // }
      )
      .then((response) => {
        console.log("status = ", response.status);

        console.log("data =", response.data);
        setResult(response.data);
      })
      .catch((err) => {
        console.log("err =", err);
      });
  }
  return (
    <div>
      <button
        onClick={() => {
          getResult();
        }}
      >
        getResult
      </button>
      <p>this is my data</p>
      {/* {result.map(result => <div>{result.name}</div>)} */}
      <h3>Ans :</h3>
      {result.map((items) => {
        return (
          <>
            <div className="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Title: {items.title}</h5>
                <p className="card-text">Body: {items.body}</p>
                <a href="#" className="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
      {/* <div>
        {/* <h1>{result.title}</h1> */}
      {/* <p>{result}</p>
      </div> */}
    </div>
  );
};

export default ApiIs;
