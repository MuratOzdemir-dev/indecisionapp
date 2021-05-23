import React from "react";

export default function Option(props) {
  return (
    <div className="option">
      <li>{props.option}</li>
      <button
        onClick={(e) => {
          props.handleDeleteOptionSingle(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
}
