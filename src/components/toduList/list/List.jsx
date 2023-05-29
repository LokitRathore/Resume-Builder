import React from "react";

const MyList = (props) => {
  const { title, listCss, list, listBoxCss, handleTodoCompleted } = props;
  return (
    <div className={listCss}>
      <h2>This is {title} List</h2>
      <p>Populating {title} list here.</p>
      {list.map((todo, index) => {
        return (
          <>
            <div key={todo.id} className={`todo-box ${listBoxCss}`}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%", paddingTop: "20px" }}>
                  {!todo?.completed ? (
                    <input
                      type="checkbox"
                      id={todo.id}
                      name={index}
                      value={index}
                      onChange={() => handleTodoCompleted(index)}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    width: "50%",
                    position: "relative",
                    textAlign: "left"
                  }}
                >
                  <h3>{todo.id}</h3>
                </div>
              </div>
              <h5>{todo.title}</h5>
              <p>{todo.completed.toString()}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MyList;
