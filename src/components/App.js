import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    emailID: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(event.target.value);
    // console.log(event.target.name);
    setInputFields((prevInputFields) => {
      return { ...prevInputFields, [name]: value };
    });
    // console.log(inputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="main">
      <form>
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={inputFields.name}
          onChange={handleChange}
        ></input>
        <input
          data-testid="email"
          type="email"
          name="emailID"
          placeholder="Enter Your Email Id"
          value={inputFields.emailID}
          onChange={handleChange}
        ></input>
        <input
          data-testid="gender"
          type="text"
          name="gender"
          placeholder="Enter Your Gender (male or female or other)"
          value={inputFields.gender}
          onChange={handleChange}
        ></input>
        <input
          data-testid="phoneNumber"
          type="number"
          name="phoneNumber"
          placeholder="Enter Your Phone Number"
          value={inputFields.phoneNumber}
          onChange={handleChange}
        ></input>
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={inputFields.password}
          onChange={handleChange}
        ></input>
        <button data-testid="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
