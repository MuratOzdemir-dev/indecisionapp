import React, { Component } from "react";
import "./_counter.scss";

export default class Counter extends Component {
  constructor() {
    super();
    this.addOneHandler = this.addOneHandler.bind(this);
    this.minusOneHandler = this.minusOneHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  addOneHandler() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  minusOneHandler() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  resetHandler() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.minusOneHandler}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}
