function ifCompleted(props) {
  const { data } = props;
  return (
    <div className="forCheck">
      <input type="checkbox" className="checkbox" />
      <p className="com">{data.completed ? "" : "Not Completed"}</p>
    </div>
    // </div>
  );
}

export { ifCompleted };
