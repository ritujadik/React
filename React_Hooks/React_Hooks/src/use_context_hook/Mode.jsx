import React, { useContext } from "react";
import { ModeContext } from "./modeContext";

const Mode = () => {
  const { new_mode, handlemode } = useContext(ModeContext);

  return (
    <>
      <h4>Mode:{new_mode}</h4>
      <button onClick={handlemode}>ChangeMode</button>
    </>
  );
};
export default Mode;
