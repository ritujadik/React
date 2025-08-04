import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:8000/dashboard")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error in fetching products:", error);
      });
  }, []);
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "10px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    width: "200px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };
  return (
    <>
      <h3>Product Items</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "10px",
        }}
      >
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                width: "220px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h4>{item["Product Name"]}</h4>
              <img
                src={`http://localhost:8000${item["Product Image"]}`}
                alt={item["Product Name"]}
                style={{ width: "100%", height: "auto", marginBottom: "10px" }}
              />
              <p>{item["Product Description"]}</p>
              <p>
                <strong>Status:</strong>{" "}
                {item.Status ? "Available" : "Unavailable"}
              </p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};
export default ProductList;
