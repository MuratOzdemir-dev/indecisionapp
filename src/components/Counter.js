import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);

  const addOneHandler = () => {
    setCount((prevVal) => prevVal + 1);
  };

  const minusOneHandler = () => {
    setCount((prevVal) => prevVal - 1);
  };

  const resetHandler = () => {
    setCount(() => 0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addOneHandler}>+1</button>
      <button onClick={minusOneHandler}>-1</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

Counter.defaultProps = {
  count: 0,
};
