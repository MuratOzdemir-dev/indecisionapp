import React, { Component } from "react";
import Option from "./Option";

export default class Options extends Component {
  render() {
    return(
      <div>
        <ol>
          <Option />
          <Option />
          <Option />
        </ol>
      </div>
    );
  }
}