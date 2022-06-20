import React, { useState, useRef } from "react";
import WithdrawDone from "./WithdrawDone";
import styled from "styled-components";

const ModalContainer = styled.div`
  text-align: center;
  &>button{
    height: 2rem;
    width: 6.5rem;
    background-color: #1564a9;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
     
    }
    &:active{
      color: #6cf7a6;
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
  background-color: #ffffff;
  padding: 2rem;
`;

const InputSection = styled.div`

margin: 3em 0 ;
&>input{
  width: 17rem;
  height: 2rem;
}
`
const ButtonSection = styled.div`
display: flex;
justify-content: space-evenly;



&>button {
  height: 2rem;
    width: 6.5rem;
    background-color: #1564a9;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
  
    &:nth-child(2){
      position: relative;
      left: -1rem;
    }

    transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
      
    }
    &:active{
      color: #6cf7a6;
    }
}
`

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
  const warningMessage = useRef()
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
            <h1>비밀번호를 한번 더 입력해 주세요</h1>
            <InputSection>
              <div ref={warningMessage} className="pwdNotMatch" style={{color : "Red", display:"none"}}> 비밀번호가 일치하지 않습니다.</div>
              <input type="password" onChange={handlePasswordCheck} placeholder="Password"></input>
            </InputSection>
            <ButtonSection>
              <WithdrawDone
              authState={authState}
              warningMessage={warningMessage}
                passwordCheck={passwordCheck}
                openModalHandlerMypage={openModalHandlerMypage}
                openModalHandlerWithdraw={openModalHandlerWithdraw}
              />
              
                <button
                  className="close-btn"
                  onClick={() => {
                    openModalHandlerWithdraw();
                    openModalHandlerMypage();
                  }}
                >
                  cancel
                </button>
             
            </ButtonSection>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Withdraw;
