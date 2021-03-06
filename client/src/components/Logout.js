import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";

const ModalContainer = styled.div`
  /* width: 30rem; */
  height: 100%;
  text-align: center;
  & > button {
    height: 100%;
    border: none;
    padding: 1rem;
    background: none;
    /* background-color: #faa08e; */
    color: white;
    font-weight: bolder;
    font-size: larger;
    transition: 0.2s ease-out;

    &:hover {
      /* background-color: #f56f54cb; */
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
width: 30rem;
  height: 20rem;
  border-radius: 10px;
  background-color: white;
  
  & > h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
`;

const LogoutViewButton = styled.div`
  display: relative;
  & > button {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0.5rem;

    /* 크기 */
    height: 3rem;
    width: 7rem;
    font-size: 23px;

    /* 색상 */
    background-color: #1564a9;
    &:nth-child(2) {
      background-color: #05c299;
      color: white;
      &:active{
        color: #1564a9;
      }
    }
    transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
    }
    &:active {
      color: #6cf7a6;
    }
  }
`;

const Logout = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickLogoutBtn = () => {
    //# 클라이언트에서 토큰 지우기
    // localStorage.removeItem("accessToken");
    loginHandler("", "", false);
    navigate("/");
    window.sessionStorage.clear()
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}><MdLogout size={35}/></button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>로그아웃 하시겠습니까?</h1>
            <LogoutViewButton>
              <button className="close-btn" onClick={openModalHandler}>
                Cancel
              </button>
              <button onClick={onClickLogoutBtn}>Logout</button>
            </LogoutViewButton>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Logout;
