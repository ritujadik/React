import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

const InputFunction = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter the detail..."
      ></input>
      <button onClick={handleInput}>Focus Input</button>
    </>
  );
};
export default InputFunction;
