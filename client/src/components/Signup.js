import React, { useState } from "react";
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

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}>Sign up</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Signup Component</h1>
            <div className="Signup-view-inputs">
              <input placeholder="ID"></input>
              <input placeholder="Nickname"></input>
              <input placeholder="Password"></input>
              <input placeholder="Password-check"></input>
            </div>
            <div className="Signup-view-buttons">
              <button>create account</button>
              <div>
                <button className="close-btn" onClick={openModalHandler}>
                  cancel
                </button>
              </div>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Signup;
