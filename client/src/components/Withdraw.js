import React, { useState, useRef } from "react";
import WithdrawDone from "./WithdrawDone";
import styled from "styled-components";

const ModalContainer = styled.div`
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

const Withdraw = ({ authState,openModalHandlerMypage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("")
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerLogin();
  };

  const openModalHandlerWithdraw = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };

  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value)
  }

  // const that = useRef(null)
  const warningMessage = useRef(null)
  return (
    <ModalContainer>
      <button onClick={openModalHandlerWithdraw}>회원탈퇴</button>
      {isOpen ? (
        <ModalBackdrop
          onClick={() => {
            openModalHandlerWithdraw();
            openModalHandlerMypage();
          }}
        >
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Withdraw Component</h1>
            <div  className="Sighout-view-inputs">
              <div ref={warningMessage} className="pwdNotMatch" style={{color : "Red", display:"none"}}> 비밀번호가 일치하지 않습니다.</div>
              <input type="password" onChange={handlePasswordCheck} placeholder="Password"></input>
            </div>
            <div className="Sighout-view-buttons">
              <WithdrawDone
              // that={that}
              authState={authState}
              warningMessage={warningMessage}
                passwordCheck={passwordCheck}
                openModalHandlerMypage={openModalHandlerMypage}
                openModalHandlerWithdraw={openModalHandlerWithdraw}
              />
              <div>
                <button
                  className="close-btn"
                  onClick={() => {
                    openModalHandlerWithdraw();
                    openModalHandlerMypage();
                  }}
                >
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

export default Withdraw;
