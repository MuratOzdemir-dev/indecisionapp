import React from "react";
import Option from "./Option";

export default function Options(props) {
  return (
    <div className="options">
      <div className="options__header">
        <h3>Your Options</h3>
        <button onClick={props.handleDeleteOptions} className="button--link">
          Remove All
        </button>
      </div>
      <div className="options__body">
      {props.options.length === 0 && <p className="options__warning">Please add an option to get started!</p>}
      <ol>
        {props.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            handleDeleteOptionSingle={props.handleDeleteOptionSingle}
          />
        ))}
      </ol>
      </div>
    </div>
  );
}
