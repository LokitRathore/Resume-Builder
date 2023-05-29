import React, { useState } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.counter.value
  };
  formate() {
    const { value: value } = this.state;
    return value === 0 ? "zero" : value;
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    // console.log("handle increment cliked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getNewClass()}>{this.formate()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          handleIncrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          delete
        </button>
        <br />
        {/* <ul>
          {this.state.tage.map((tage) => (
            <li key={tage}>{tage}</li>
          ))}{" "}
        </ul> */}
      </div>
    );
  }

  getNewClass() {
    let classes = "btn btn-";
    classes += this.state.value === 0 ? "warning m-2" : "danger m-2";
    return classes;
  }
}

export default Counter;
