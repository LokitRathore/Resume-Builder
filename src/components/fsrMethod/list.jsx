import React, { useState } from "react";

const List = (props) => {
  const [value, setValue] = useState(1);

  const { todoData } = props;
  function getNewClass() {
    let classes = "btn btn-";
    classes += value === 0 ? "warning m-2" : "danger m-2";
    return classes;
  }

  return (
    <>
      <h1>This is a list component</h1>
      <div>
        {todoData?.map((data) => {
          return (
            <div className="card">
              <p className="list-group-item">{data.id}</p>
              <p className="list-group-item">{data.userId}</p>

              <p style={{ backgroundColor: "red" }}>
                {data.completed?.toString()}
              </p>
              <p className="title">{data.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
