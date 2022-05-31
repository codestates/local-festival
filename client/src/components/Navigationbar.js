import React, { Component } from "react";
import Pickpage from "../pages/Pickpage";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div className="Navigationbar">
      <button>mypage</button>
      <Link to="/Pickpage">
        <button>pickpage</button>
      </Link>
      <button>logout</button>
    </div>
  );
};

export default Navigationbar;
