import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    emailId: "",
    gender: "male",
    phoneNumber: "",
    password: "",
    userName: ""
  });

  const [errorFields, setErrorFields] = useState(false);


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

  const handleClick = () => {
    if (
      inputFields.name === "" ||
      inputFields.emailId === "" ||
      inputFields.gender === "" ||
      inputFields.phoneNumber === "" ||
      inputFields.password === ""
    ) {
      setErrorFields("All fields are mandatory");
    } else if (inputFields.name.match(/^[a-zA-Z]+$/) === false) {
      setErrorFields("Name is not alphanumeri");
    } else if (inputFields.emailId.includes("@") === false) {
      setErrorFields("Email must contain @");
    } else if (
      inputFields.gender !== "male" &&
      inputFields.gender !== "female" &&
      inputFields.gender !== "other"
    ) {
      setErrorFields("Please identify as male, female or others");
    } else if (Number.isNaN(inputFields.phoneNumber)) {
      setErrorFields("Phone Number must contain only numbers");
    } else if (inputFields.password.length < 6) {
      setErrorFields("Password must contain atleast 6 letters");
    } else {
      let index = inputFields.emailId.indexOf("@");
      let name = inputFields.emailId.substring(0, index);
      setInputFields((prevInputFields) => {
        return { ...prevInputFields, userName: name };
      });
      setErrorFields(false);
    }
  };

  return (
    <div id="main">
      {errorFields && <div>{`Hello ${inputFields.userName}`}</div>}
      {!errorFields && <div>{errorFields}</div>}
      <div>
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
          name="emailId"
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
        <button data-testid="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
