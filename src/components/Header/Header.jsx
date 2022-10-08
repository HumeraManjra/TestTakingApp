import React from "react";
import logo from "../../asset/logo.png";
import "./Header.css";

function index() {
  return (
    <header className="flex-center">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
      </div>
    </header>
  );
}

export default index;
