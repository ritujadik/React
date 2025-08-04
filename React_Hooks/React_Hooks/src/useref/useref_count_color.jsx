import React from "react";
import { useState, useRef, useEffect } from "react";

const Count = () => {
  const [inputvalue, setInputValue] = useState("");
  const count = useRef(0);
  const color = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });
  const handlechange = (e) => {
    setInputValue((prev) => prev + "1");
  };
  const handlecolorchange = () => {
    color.current.style.backgroundColor = "Red";
  };

  return (
    <>
      <button ref={color} onClick={handlechange}>
        Clickable
      </button>
      <h1>Render Count:{count.current}</h1>
      <button onClick={handlecolorchange}>Button Color change</button>
    </>
  );
};
export default Count;
