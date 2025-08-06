import React from "react";
import { useState } from "react";

const Formfunction = () => {
  const [form, setForm] = useState({
    FName: "",
    LName: "",
    Email: "",
  });
  const handleform = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlereset = () => {
    setForm({
      FName: "",
      LName: "",
      Email: "",
    });
  };
  return (
    <>
      <h5>Form</h5>
      <div>
        <input
          type="text"
          name="FName"
          placeholder="enter your first name"
          value={form.FName}
          onChange={handleform}
        />
      </div>
      <div>
        <input
          type="text"
          name="LName"
          placeholder="enter your last name"
          value={form.LName}
          onChange={handleform}
        />
      </div>
      <div>
        <input
          type="email"
          name="Email"
          value={form.Email}
          onChange={handleform}
        />
      </div>
      <button onClick={handlereset}>Reset</button>
    </>
  );
};

export default Formfunction;
