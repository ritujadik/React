import React from "react";
import { useState, useEffect } from "react";

const ComponentMounted = () => {
  const [mount, setMount] = useState("unmounted");

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const handleMounted = () => {
    setMount((prev) => (prev === "unmounted" ? "mounted" : "unmounted"));
  };
  return (
    <>
      <button onClick={handleMounted}>ClickMe</button>
      <p>Component:{mount}</p>
    </>
  );
};
export default ComponentMounted;
