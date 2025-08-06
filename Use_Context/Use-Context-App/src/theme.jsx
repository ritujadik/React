import React, { Children } from "react";
import { useState, createContext } from "react";

export const screenContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const handletheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <screenContext.Provider value={{ theme, handletheme }}>
      <h5>Theme:{theme}</h5>
      {/* <button onClick={handletheme}>ToogleTheme</button> */}
      {children}
    </screenContext.Provider>
  );
};
export default Theme;
