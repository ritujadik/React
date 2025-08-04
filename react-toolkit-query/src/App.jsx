import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetfakestoreByNameQuery } from "./service/pokemon";

function App() {
  const { data, error, isLoading } = useGetfakestoreByNameQuery("products");

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <div className="App">
        {error ? (
          <div>Oh no,there was an error</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          <div>
            <h3>{data.title || "No Name"}</h3>
            <p>Hello</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
