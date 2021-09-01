// imrc
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
// ccc
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: "",
    };
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      alert("can not decrement number should be positive");
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>This is a Counter :</h1>
        <div className="counterContent">
          <Button variant="success" onClick={() => this.increment()}>
            +
          </Button>
          <h2>{this.state.counter}</h2>
          <Button variant="success" onClick={this.decrement}>
            -
          </Button>
        </div>
        {}
        <Form.Control
          type="text"
          onChange={this.handleChange}
          placeholder="Enter text  ..."
        />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default Counter;
