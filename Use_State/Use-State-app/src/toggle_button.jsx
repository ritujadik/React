import React, { useEffect } from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  const handleToggle = () => {
    SetToggle((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleToggle}>ClickMe</button>
    </>
  );
};
export default ToggleButton;
