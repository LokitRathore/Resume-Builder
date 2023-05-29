import Rect, { Component } from "react";
import Counter from "./moke";

class MyCounter extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = (counterid) => {
    const counter = this.state.counter.filter((e) => e.id !== counterid);
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reaset
        </button>
        {this.state.counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default MyCounter;
