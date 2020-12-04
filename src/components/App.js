import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <form>
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        ></input>
        <input
          data-testid="email"
          type="email"
          name="email"
          placeholder="Enter Your Email Id"
        ></input>
        <input
          data-testid="gender"
          type="text"
          name="gender"
          placeholder="Enter Your Gender (male or female or other)"
        ></input>
        <input
          data-testid="phoneNumber"
          type="number"
          name="phoneNumber"
          placeholder="Enter Your Phone Number"
        ></input>
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
        ></input>
        <button data-testid="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
