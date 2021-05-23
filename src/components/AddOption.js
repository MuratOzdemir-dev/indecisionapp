import React, { useState } from "react";

export default function AddOption(props) {
  const [error, setError] = useState(undefined);

  const handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = props.handleAddOption(option);
    setError(() => error);

    e.target.elements.option.value = "";
  };

  return (
    <div className="add-option">
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button className="button">Add Option</button>
      </form>
    </div>
  );
}
