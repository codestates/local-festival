import React, { useState } from "react";
import Withdraw from "../components/Withdraw";
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

const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Mypage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const openModalHandlerMypage = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <button onClick={openModalHandler}>Mypage</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Mypage component</h1>
            <Controllers>
              <input placeholder="바꿀닉네임"></input>
            </Controllers>
            <Controllers>
              <button className="close-btn" onClick={openModalHandler}>
                cancel
              </button>
              <button>수정하기</button>
              <Withdraw openModalHandlerMypage={openModalHandlerMypage} />
            </Controllers>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Mypage;
