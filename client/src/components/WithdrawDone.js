import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 2rem;
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
  background-color: #faf7f2;
  width: 30vw;
  height: 43vh;
  & > h1 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
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
    margin-top: 1rem;
    margin-right: 1rem;

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

const CloseControllers = styled.div`
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

const WithdrawDone = ({ openModalHandlerMypage, openModalHandlerWithdraw }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerWithdraw();
  };
  return (
    <ModalContainer>
      <Controllers>
        <button onClick={openModalHandler}>확인</button>
      </Controllers>
      {isOpen ? (
        <ModalBackdrop
          onClick={() => {
            openModalHandler();
            openModalHandlerMypage();
            openModalHandlerWithdraw();
          }}
        >
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>
              성공적으로<br></br>회원탈퇴가 되었습니다
            </h1>
            <h1>그동안 이용해 주셔서 감사합니다</h1>
            <CloseControllers>
              <button
                className="close-btn"
                onClick={() => {
                  openModalHandler();
                  openModalHandlerMypage();
                  openModalHandlerWithdraw();
                }}
              >
                확인
              </button>
            </CloseControllers>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default WithdrawDone;
