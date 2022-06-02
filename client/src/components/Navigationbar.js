import React from "react";
import Mypage from "../pages/Mypage";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const Navigationbar = ({ isLogin, loginHandler }) => {
  console.log(isLogin);
  return (
    <div className="Navigationbar">
      {isLogin ? (
        <div className="Navigationbar-buttons">
          <Mypage />
          <Link to="/Pickpage">
            <button>pickpage</button>
          </Link>
          <Logout loginHandler={loginHandler} />
        </div>
      ) : (
        <div className="Navigationbar-buttons">
          <Link to="/Pickpage">
            <button>pickpage</button>
          </Link>
          <Login loginHandler={loginHandler} />
        </div>
      )}
    </div>
  );
};

export default Navigationbar;
