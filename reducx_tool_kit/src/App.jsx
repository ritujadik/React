import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
    console.log("ye h increment");
  }
  function handleDecrementClick() {
    dispatch(decrement());
    console.log("ye h decrement");
  }
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>

      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  );
}

export default App;
