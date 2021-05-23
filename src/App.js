import React, { Component } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
// import Counter from "./components/Counter";
// import Visibility from "./components/Visibility";
import "./scss/style.scss";

export default class App extends Component {
  constructor() {
    super();
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);

    this.state = {
      options: [],
      selected: undefined,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOptionSingle(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  }

  handlePick(open) {
    const random = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selected: this.state.options[random] }));
    if (open) {
      this.setState(() => ({ selected: undefined }));
    }
  }

  handleAddOption(option) {
    if (!option) {
      return `Enter valid value to add option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists`;
    }

    this.setState((prevState) => ({ options: [...prevState.options, option] }));
  }

  render() {
    return (
      <div>
        <Header
          title="Indecision App"
          subtitle="Put your life in the hands of a computer"
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            selected={this.state.selected}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOptionSingle={this.handleDeleteOptionSingle}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          {/* <Counter /> */}
          {/* <Visibility /> */}
        </div>
      </div>
    );
  }
}
