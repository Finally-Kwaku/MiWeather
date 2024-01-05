import React from "react";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Forecast, Explore, Know</h1>
      </div>
    </>
  );
}

export default Header;
