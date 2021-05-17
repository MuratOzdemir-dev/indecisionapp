import React, { Component } from "react";
import Option from "./Option";

export default class Options extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <ol>
          {this.props.options.map((option, index) => (
            <Option option={option} key={index} />
          ))}
        </ol>
      </div>
    );
  }
}
