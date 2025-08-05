import { useContext } from "react";
import { userContext } from "./user_name1";

const DisplayUserName = () => {
  const usernames = useContext(userContext);
  return <p>Displayed from context:{usernames}</p>;
};
export default DisplayUserName;
