import React, { Component } from "react";

export default class AddOption extends Component {
  render() {
    return(
      <div>
        <form>
          <input type="text" name="newOption" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}