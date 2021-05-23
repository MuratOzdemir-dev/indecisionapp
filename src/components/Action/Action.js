import React from "react";
import "./action.scss";

export default function Action(props) {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
      <p>Murat</p>
    </div>
  );
}
