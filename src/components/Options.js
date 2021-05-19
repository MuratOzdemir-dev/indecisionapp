import React from "react";
import Option from "./Option";

export default function Options(props) {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Enter Something to do</p>}
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
  );
}
