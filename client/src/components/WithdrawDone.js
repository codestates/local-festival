import axios from "axios";
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

const WithdrawDone = ({ authState,warningMessage ,passwordCheck,openModalHandlerMypage, openModalHandlerWithdraw }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerWithdraw();
  };

  

  const pwdNotMatch = ()=> {
    // that.current.value="비밀번호가 일치하지 않습니다."
    console.log(warningMessage);
    warningMessage.current.style.display = "block"
    // that.current.focus()
  }

  const handleSubmit = () => {

    axios.delete('http://localhost:4001/users' , {data : {passwordCheck: passwordCheck},  headers: { accesstoken: sessionStorage.getItem("accesstoken")}})
    .then(response => {
      if(response.data.message === "successfully quit") {
        console.log('here');
          openModalHandler()
        } else {
          pwdNotMatch()
        }
      }
    )
    .catch(err => {
      console.log(err);
    })

    
    
  }
  return (
    <ModalContainer>
      <button onClick={handleSubmit}>확인</button>
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
