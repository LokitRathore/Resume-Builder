import { encryption, decryption } from "../../utils/utils";
import axios from "axios";
import React, { useState } from "react";
// import FirstSecurity from "../securites/first";
const apiCallIs = "https://jsonplaceholder.typicode.com/photos";

const ApiForPostGet = () => {
  const [result, setResult] = useState([]);
  const [userIdIs, setUserIdIs] = useState("");
  const [idIs, setidIs] = useState("");
  const [titleIs, setTitleIs] = useState("");
  const [bodyIs, setBodyIs] = useState("");
  const [password, setPassword] = useState();
  const [fin, setFin] = useState("");
  const [decrypt, setDecrypt] = useState();

  // console.log(titleIs)
  // import react from "react"

  // const FirstSecurity = (props) => {
  // function firstSecurity() {
  //   let final = "";
  //   for (let i in password) {
  //     const val = String.fromCharCode(password.charCodeAt(i) + 10);
  //     final += val;
  //   }
  //   setFin(final);
  //   secoundDecrypt();
  // }

  // function secoundDecrypt() {
  //   let final = "";
  //   for (let i in fin) {
  //     const val = String.fromCharCode(fin.charCodeAt(i) - 10);
  //     // const val = password.charCodeAt(i)
  //     final += val;
  //     // console.log(password.charCodeAt(i))
  //   }
  //   setDecryption(final);
  // }

  // export default FirstSecurity

  function getResult() {
    axios
      .get(apiCallIs)
      .then((response) => {
        console.log("status = ", response.status);

        // console.log("data =", response.data);
        setResult(response.data);
      })
      .catch((err) => {
        console.log("err =", err);
      });
  }

  function postResult() {
    axios
      .post(apiCallIs, {
        userId: userIdIs,
        id: idIs,
        title: titleIs,
        body: bodyIs
      })
      .then((response) => {
        console.log(userIdIs);
        console.log(response);
        // {console.log(id)}
        // {console.log(title)}
        // {console.log(body)}
        // {console.log("starus code: ",StatusCode)}
      })
      .catch((err) => {
        {
          console.log("error is:", err);
        }
      });
  }

  // function handleSecurity (password) {
  // <FirstSecurity
  // password = {password}
  // />
  // console.log("yes for s")
  // }

  return (
    <div>
      <button
        onClick={() => {
          getResult();
        }}
      >
        getResult
      </button>{" "}
      <br />
      <input
        type="text"
        placeholder="User Id"
        id="userIdIS"
        onChange={(e) => setUserIdIs(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Id"
        id="idIs"
        onChange={(e) => setidIs(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Title"
        id="titleIs"
        onChange={(e) => setTitleIs(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Body"
        id="bodyIs"
        onChange={(e) => setBodyIs(e.target.value)}
      />{" "}
      <br />
      <button onClick={postResult}>Post Data</button>
      {/* {result.map(result => <div>{result.name}</div>)} */}
      {result.map((items) => {
        return (
          <>
            <div
              className="card"
              style={{
                width: "18rem",
                background: "yellow",
                marginBottom: "10px"
              }}
            >
              <img src={items.url} class="card-img-top" alt="..." />
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
      </div> */} <br />
      <div
        className="btn btn-secondary dropdown-toggle"
        style={{ marginTop: "10px" }}
      >
        <input
          type="text"
          placeholder="for cipher code"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            setFin(encryption(password));
          }}
        >
          convert
        </button>{" "}
        <br />
        <button
          onClick={() => {
            setDecrypt(decryption(fin));
          }}
        >
          convert for decrypt
        </button>
        <h2>Encryption : {fin}</h2>
        <h2>Decryption : {decrypt}</h2>
      </div>
    </div>
  );
};

export default ApiForPostGet;
