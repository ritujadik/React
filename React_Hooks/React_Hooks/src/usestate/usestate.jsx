import React from "react";
import { useState } from "react";
import "../usestate/usestate.css";

const NewForm = () => {
  const [form, setForm] = useState({
    name: "",
    DOB: "",
    Gender: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prevform) => ({
      ...prevform,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    alert("form submitted successfully");
    setForm({
      name: "",
      DOB: "",
      Gender: "",
    });
  };
  const handleReset = (e) => {
    setForm({
      name: "",
      DOB: "",
      Gender: "",
    });
  };
  return (
    <>
      <div>
        <form>
          <h6>Form</h6>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label>DOB</label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              value={form.DOB}
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Gender</label>
            <label>
              <input
                type="radio"
                name="Gender"
                value="Male"
                checked={form.Gender === "Male"}
                onChange={handleInput}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="Gender"
                value="Female"
                checked={form.Gender === "Female"}
                onChange={handleInput}
              />{" "}
              Female
            </label>
          </div>
          <button id="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};
export default NewForm;
