import React, { Component } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header
          title="Indecision App"
          subtitle="Put your life in the hands of a computer"
        />
        <Action />
        <Options options={["Thing One", "Thing Two", "Thing Three"]}/>
        <AddOption />
      </div>
    );
  }
}
