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
  return (
    <div id="main">
      <form>
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={inputFields.name}
        ></input>
        <input
          data-testid="email"
          type="email"
          name="email"
          placeholder="Enter Your Email Id"
          value={inputFields.emailID}
        ></input>
        <input
          data-testid="gender"
          type="text"
          name="gender"
          placeholder="Enter Your Gender (male or female or other)"
          value={inputFields.gender}
        ></input>
        <input
          data-testid="phoneNumber"
          type="number"
          name="phoneNumber"
          placeholder="Enter Your Phone Number"
          value={inputFields.phoneNumber}
        ></input>
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={inputFields.password}
        ></input>
        <button data-testid="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
