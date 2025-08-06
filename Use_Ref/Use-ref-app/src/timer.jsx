import React from "react";
import { useState, useRef } from "react";

const Timer = () => {
  const [timernew, setTimerNew] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimerNew((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const handlereset = () => {
    handleStop();
    setTimerNew(0);
  };

  return (
    <>
      <h5>Timer:{timernew}</h5>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
};
export default Timer;
