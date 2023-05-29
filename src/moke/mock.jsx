import axios from "axios";
import React, { useState } from "react";

class MyComponent extends React.Component {
  state = {
    counter: 0,
    api: "https://jsonplaceholder.typicode.com/photos"
  };
  handleGetApi() {
    axios.get(this.api).then().catch();
  }
  handleDecremenr() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getClass()}>{this.state.counter} </span>
        <br />
        <button onClick={() => this.handleGetApi()}>increment</button>
        <br />
        <button onClick={() => this.handleDecremenr()}>decrement</button>
      </div>
    );
  }
  getClass() {
    let classes = "btn btn-";
    classes +=
      this.state.counter > 5
        ? "warning"
        : this.state.counter > 10
        ? "danger"
        : "primary";
    return classes;
  }
}

export default MyComponent;
