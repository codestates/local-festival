import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  /* height: 15rem; */
  text-align: center;
  &>button{
    height: 2rem;
    width: 6.5rem;
    background-color: #05c299;;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    left: 1rem;
    transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
     
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>h2{
    position: relative;
    top: -1rem;
  }

  &>button{
    height: 2rem;
    width: 6.5rem;
    position: relative;
    top: 1rem;
    background-color: #1564a9;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      transition: all 0.1s;
      transform: translateY(-5%);
      color: #6cf7a6;
    }
  }


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
      <button onClick={handleSubmit}>탈퇴하기</button>
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
            <h2>성공적으로 회원탈퇴가 되었습니다</h2>
            <h2>이용해주셔서 감사합니다</h2>
            
           
                <button
                  className="close-btn"
                  onClick={() => {
                    openModalHandler();
                    openModalHandlerMypage();
                    openModalHandlerWithdraw();
                    window.sessionStorage.clear()
                    // navigate("/")
                    window.location.replace("/")
                  }}
                >
                  확인
                </button>
             
           
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default WithdrawDone;
