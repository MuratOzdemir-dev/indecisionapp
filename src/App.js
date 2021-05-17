import React, { Component } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
// import Counter from "./components/Counter";
// import Visibility from "./components/Visibility";

export default class App extends Component {
  constructor() {
    super();
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      options: [],
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }

  handleAddOption(option) {
    if (!option) {
      return `Enter valid value to add option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists`;
    }


    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      }
    })
  }

  render() {
    return (
      <div>
        <Header
          title="Indecision App"
          subtitle="Put your life in the hands of a computer"
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        {/* <Counter />
        <Visibility /> */}
      </div>
    );
  }
}
