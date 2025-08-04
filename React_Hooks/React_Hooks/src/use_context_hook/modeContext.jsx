import React, { createContext } from "react";
import { useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [new_mode, setNewMode] = useState("light");

  const handlemode = () => {
    setNewMode((prev) => (prev === "light" ? "Dark" : "light"));
  };
  console.log("ModeProvider running, mode:", new_mode);
  return (
    <ModeContext.Provider value={{ new_mode, handlemode }}>
      {children}
    </ModeContext.Provider>
  );
};
