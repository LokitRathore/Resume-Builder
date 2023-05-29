import axios from "axios";
import React, { useEffect, useState } from "react";
import MyList from "../list/List";

const apiIs = "https://jsonplaceholder.typicode.com/todos";

const MyTudo = () => {
  const [completed, setCompleted] = useState([]);
  const [todus, setTodus] = useState([]);
  const [pending, setPending] = useState([]);

  axios
    .get(apiIs)
    .then((res) => {
      setTodus(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    segregateTodos();
  }, [todus]);

  const segregateTodos = () => {
    let pendingTodo = [];
    let completedTodo = [];

    for (let todo of todus) {
      if (todo.completed) completedTodo.push(todo);
      else pendingTodo.push(todo);
    }

    setPending(pendingTodo);
    setCompleted(completedTodo);
  };

  const handleTodoCompleted = (index) => {
    // add to completed todo
    setCompleted([{ ...pending[index], completed: true }, ...completed]);
    // remove from pendingTodo
    let updatedPending = [...pending];
    updatedPending.splice(index, 1);
    setPending(updatedPending);
  };

  return (
    <>
      <h1>This is TodoList</h1>
      <p>Populating todo list here.</p>
      <div className="list-box">
        <MyList
          title="pending"
          listCss="pending"
          list={pending}
          listBoxCss="pending-list-box"
          handleTodoCompleted={handleTodoCompleted}
        />
        <MyList
          title="completed"
          listCss="completed"
          list={completed}
          listBoxCss="completed-list-box"
        />
      </div>
    </>
  );
};

export default MyTudo;
