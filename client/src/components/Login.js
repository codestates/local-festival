import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  width: 30vw;
  height: 40vh;
`;

const LoginControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  height: 8em;
`;

const InputsInColumn = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    margin: 0.2rem;
  }
`;

const ButtonsInRow = styled.div`
  display: flex;
  & > button {
    height: 2rem;
    margin: 0.2rem;
    font-size: 28px;
    font-weight: bold;
  }
`;

const Login = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickLoginBtn = () => {
    loginHandler();
  };

  const openModalHandlerLogin = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <button onClick={openModalHandler}>login</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Login Component</h1>
            <LoginControl>
              <InputsInColumn>
                <input placeholder="ID"></input>
                <input placeholder="Password"></input>
              </InputsInColumn>
              <ButtonsInRow>
                <button onClick={onClickLoginBtn}>Log in</button>
                <Signup openModalHandlerLogin={openModalHandlerLogin} />
                <button className="close-btn" onClick={openModalHandler}>
                  cancel
                </button>
              </ButtonsInRow>
            </LoginControl>
            <div>
              <button>구글 로그인</button>
              <button>카카오 로그인?</button>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Login;
