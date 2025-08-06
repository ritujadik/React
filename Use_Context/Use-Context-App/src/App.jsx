import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserNameComponent from "./user_name1";
import DisplayUserName from "./username2";
import Theme from "./theme";

function App() {
  return (
    <>
      {/* <UserNameComponent>
        <DisplayUserName />
      </UserNameComponent> */}
      <Theme>
        <DisplayUserName />
      </Theme>
    </>
  );
}

export default App;
