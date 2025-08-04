import React from "react";
import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const timerref = useRef(null);

  const starttimer = () => {
    timerref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  const stoptimer = () => {
    clearInterval(timerref.current);
    timerref.current = null;
  };
  const resettimer = () => {
    stoptimer();
    setTime(0);
  };
  return (
    <div>
      <h1>StopWatch:{time} seconds</h1>
      <button onClick={starttimer}>Start</button>
      <br />
      <br />
      <button onClick={stoptimer}>Stop</button>
      <br />
      <br />
      <button onClick={resettimer}>Reset</button>
      <br />
      <br />
    </div>
  );
};
export default Stopwatch;
