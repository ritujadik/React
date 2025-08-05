import React from "react";
import { useState, createContext } from "react";

export const userContext = createContext();

const UserNameComponent = ({ children }) => {
  const [usernames, SetUsernames] = useState("Rahul");

  const handlename = () => {
    SetUsernames((prev) => (prev === "Rahul" ? "Raj" : "Rahul"));
  };

  return (
    <userContext.Provider value={usernames}>
      <p>UserName:{usernames}</p>
      <button onClick={handlename}>ToggleName</button>
      {children}
    </userContext.Provider>
  );
};
export default UserNameComponent;
