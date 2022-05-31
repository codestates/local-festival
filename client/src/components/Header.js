import React from "react";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img alt="로고"></img>
      </Link>
      <Navigationbar />
    </div>
  );
};

export default Header;
