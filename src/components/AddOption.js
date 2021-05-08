import React, { Component } from "react";

export default class AddOption extends Component {

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    
    if(option) {
      alert(option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}