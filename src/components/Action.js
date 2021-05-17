import React, { Component } from "react";

export default class Action extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    );
  }
}
