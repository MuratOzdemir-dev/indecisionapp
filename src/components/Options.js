import React, { Component } from "react";
import Option from "./Option";

export default class Options extends Component {

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    console.log(this.props.options);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map((option,index) => <Option option={option} key={index}/>)}
        </ol>
      </div>
    );
  }
}