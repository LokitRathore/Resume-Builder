import React, { useEffect, useState } from "react";
import TodoList from "./todu";

const List = (props) => {
  const [value, setValue] = useState(0);
  const [changeData, setChangeData] = useState([]);
  // const [checked, setChecked] = useState(false);

  // function handleCheck(data, id) {
  //   // console.log("data ", data, " id ", id);
  //   console.log("props", props);
  //   // () => props.handleCb();
  // }

  const { todoData } = props;
  function getNewClass() {
    let classes = "btn btn-";
    classes += value === 0 ? "warning m-2" : "danger m-2";
    return classes;
  }

  // function handleClicked(data, id, index, e) {
  //   console.log(checked);
  //   props.handleCb(data, data.id, index);

  //   // e.preventDefault(checked)
  //   // setChecked(true)
  // }

  // function ifComoleted(data, index) {
  //   if (data.completed == true) {
  //     return "";
  //   } else if (value == 0) {
  //     return (
  //       <div>
  //         <input
  //           type="checkbox"
  //           id={data.id}
  //           name={index}
  //           value={index}
  //           onChange={(e) => {
  //             handleClicked(data, data.id, index, e);
  //           }}
  //           className="checkbox"
  //         />

  //         {/* <label for="inCompletCom"> to complete</label> */}
  //         {/* {console.log(data.id, " is ", data.completed )} */}
  //       </div>
  //     );
  //   }
  // }

  function forBgClr(data) {
    if (data.completed == true) {
      return 'backgroundColor: "blue"';
    }
    ('backgroundColor: "cornflowerblue"');
  }

  return (
    <>
      <h1>This is a list component</h1>
      <div className="card">
        {todoData?.map((data, index) => {
          return (
            <div className="card" id={data.id}>
              <div
              key={data.id}
                style={{
                  display: "flex",
                  width: "50%",
                  marginLeft: "5%",
                  paddingTop: "20px"
                }}
              >
                {/* {ifComoleted(data, id)} */}
                {data.completed ? (
                  ""
                ) : (
                  <input
                    type="checkbox"
                    id={data.id}
                    name={index}
                    value={index}
                    onChange={() => props.handleCb(index)}
                    className="checkbox"
                  />
                )}

                <p style={{ marginLeft: "69%" }}>id = {data.id}</p>
              </div>
              <p className="forUserId">user id = {data.userId}</p>
              <p className="completedData">{data.completed?.toString()}</p>
              <p className="title">{data.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
