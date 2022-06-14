import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 6rem;
  height: 100%;
  text-align: center;
  &>button{
    
    height: 100%  ;
    border: none;
    padding: 0 1rem;
    background-color: #faa08e;
    color: white;
    font-weight: bolder;
    font-size: larger;
    transition: 0.2s ease-out;
    &:hover{
      background-color: #f56f54cb;
      transition: all 0.2s ease-in;
      cursor: pointer;
    }
  }
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
const Logout = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickLogoutBtn = () => {
     //# 클라이언트에서 토큰 지우기 
    // localStorage.removeItem("accessToken");
    loginHandler();
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}>Logout</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>정말 로그아웃할꺼여?</h1>
            <div className="Logout-view-buttons">
              <button className="close-btn" onClick={openModalHandler}>
                Cancel
              </button>
              <button onClick={onClickLogoutBtn}>Logout</button>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Logout;
