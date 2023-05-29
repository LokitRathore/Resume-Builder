import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./list";

const todoApi = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);
  const [data, setData] = useState([]);

  console.log("data is : ", data);

  useEffect(() => {
    axios
      .get(todoApi)
      .then((response) => {
        // console.log("this is data", response.data);
        setData(response.data);
      })
      .catch(() => {
        console.log("Server fat gaya!!!!!!!!");
      });
  }, []);

  let pendingTodos = [];
  let completedTodos = [];
  const handleSegregation = (data) => {
    for (let item = 0; item < data.length; item++) {
      if (data[item].completed)
        completedTodos = [...completedTodos, data[item]];
      else pendingTodos = [...pendingTodos, data[item]];
    }
    setCompleted(completedTodos);
    setPending(pendingTodos);
  };

  return (
    <>
      <button
        onClick={() => {
          handleSegregation(data);
        }}
      >
        Segregate Data
      </button>
      <h1>This is todoLIst Component</h1>
      {/* {console.log("completed", completed)} */}
      {/* {console.log("pending", pending)} */}
      <div className="d-flex p-2">
        <div>
          <List todoData={completed} />
        </div>
        <div>
          <List todoData={pending} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
