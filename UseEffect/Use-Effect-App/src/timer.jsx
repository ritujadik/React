import React from "react";
import { use } from "react";
import { useState, useEffect } from "react";

/* when we want to create the feature of automatic timer then we have to use useEffect function*/

const Timer = () => {
  const [timer, setTimer] = useState(0);
  /* useEffect is a function who can take a function or any input as an argument and we have to use clear interval in 
  return while we are using setInterval,setTimeout,addEventListeiner */

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    console.log("I am started");

    /* we have to put the variable in the clearInterval which we want to clear after running settimeout,setinterval,addeventlisteiner*/
    return () => {
      clearInterval(interval);
    };
  }, []);
  /* In this we were trying to make a simple manual function who start time manually once click on the start button but it has con's like
if we click the same multiple times it will run everytime and add the value frequntly which added bunch of numbers.
*/
  //   const handlestart = () => {
  //     setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //   };

  /* handlestop button will also not working properly since we click on it then it will do the timer value 0 but as timer is running behind so it will start automatcially*/
  const handlestop = () => {
    setTimer(0);
  };
  return (
    <>
      <h5>Timer:{timer}</h5>
      {/* <button onClick={handlestart}>Start</button> */}
      <button onClick={handlestop}>Stop</button>
    </>
  );
};
export default Timer;
