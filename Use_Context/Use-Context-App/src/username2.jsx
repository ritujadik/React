import { useContext } from "react";
import { userContext } from "./user_name1";
import { screenContext } from "./theme";

const DisplayUserName = () => {
  const usernames = useContext(userContext);
  const { theme, handletheme } = useContext(screenContext);
  return (
    <>
      <p>Theme needs to be changed</p>
      {/* <p>Displayed from context:{usernames}</p>; */}
      <button onClick={handletheme}>ThemeChange</button>
    </>
  );
};
export default DisplayUserName;
