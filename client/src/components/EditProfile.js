import React, { useState } from "react";
import Withdraw from "./Withdraw";
import styled from "styled-components";

const ModalContainer = styled.div`
  /* height: 2rem; */
  text-align: center;
  & > button {
    font-size: 1rem;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  /* z-index: 999; */
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
  background-color: #faf7f2;
  width: 30vw;
  height: 43vh;
  & > h1 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const InputsInColumn = styled.div`
  display: relative;
  flex-direction: column;
  & > input {
    margin: 0.5rem;
    width: 15rem;
    height: 30px;
  }
`;

const Controllers = styled.div`
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
    margin: 10px;

    /* 크기 */
    height: 2rem;
    width: 6.5rem;
    font-size: 1rem;

    /* 색상 */
    background: #faa08e;
    &:hover {
      background: #fd937e;
    }
    &:active {
      background: #f56f54;
    }
  }
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
      <button onClick={openModalHandler}>회원정보 수정/탈퇴</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>회원정보 수정/탈퇴</h1>
            <InputsInColumn>
              <input placeholder="바꿀닉네임"></input>
            </InputsInColumn>
            <Controllers>
              <button>수정하기</button>
              <button onClick={openModalHandler}>cancel</button>
              <Withdraw openModalHandlerMypage={openModalHandlerMypage} />
            </Controllers>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Mypage;
