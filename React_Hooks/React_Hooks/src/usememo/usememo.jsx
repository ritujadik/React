import React, { useMemo } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expenivefun = (num) => {
    for (let i = 0; i < 1000000; i++) {}
    return num * 2;
  };
  const doubleValue = useMemo(() => expenivefun(input), [input]);

  const handleincrement = () => {
    console.log("inside expensive task");
    setCount((count) => count + 1);
  };
  const handledecrement = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };

  return (
    <div>
      <h4>Counter:{count}</h4>
      <input
        type="number"
        placeholder="enter the number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <div>Double:{doubleValue}</div>
    </div>
  );
};
export default Counter;
