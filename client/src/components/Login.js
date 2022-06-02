import React from "react";
import { useState } from "react";
import Signup from "./Signup";
const Login = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickLoginBtn = () => {
    loginHandler();
  };

  return (
    <div className="Login-container">
      <button onClick={openModalHandler}>login</button>
      {isOpen ? (
        <div className="Login-backdrop" onClick={openModalHandler}>
          <div
            className="Login-view"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Login Component</h1>
            <div className="Login-view-itself">
              <div className="Login-view-inputs">
                <input placeholder="ID"></input>
                <input placeholder="Password"></input>
              </div>
              <div className="Login-view-buttons">
                <button onClick={onClickLoginBtn}>Log in</button>
                <Signup />
              </div>
            </div>
            <div className="Login-view-social">
              <button>구글 로그인</button>
              <button>카카오 로그인?</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
