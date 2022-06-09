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

const WithdrawDone = ({ openModalHandlerMypage, openModalHandlerWithdraw }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerWithdraw();
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}>확인</button>
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
            <h1>WithdrawDone Component</h1>
            <div className="WithdrawDone-view-inputs">
              성공적으로 회원탈퇴가 되었습니다. 감사합니다.
            </div>
            <div className="WithdrawDone-view-buttons">
              <div>
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
              </div>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default WithdrawDone;
