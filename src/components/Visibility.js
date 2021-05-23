import React, { Component } from "react";


export default class Visibility extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggle() {
    this.setState((prevState) => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    return (
      <div className="visibility">
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? "Hide" : "Show"}
        </button>
        {this.state.visibility && (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              vero.
            </p>
          </div>
        )}
      </div>
    );
  }
}
