import React from "react";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";

const Header = ({ isLogin, loginHandler }) => {
  return (
    <div className="Header">
      <Link to="/">
        <img alt="로고"></img>
      </Link>
      <div>header</div>
      <Navigationbar loginHandler={loginHandler} isLogin={isLogin} />
    </div>
  );
};

export default Header;
