import React, { useState, useRef } from "react";
import Withdraw from "./Withdraw";
import styled from "styled-components";
import axios from "axios";

const ModalContainer = styled.div`
  /* height: 15rem; */
  text-align: center;
  &>button {
    width: 10rem;
    height: 3rem;
    background-color: #1564a9;
    color: white;
    font-weight: bold;
    font-size: large;
    border-radius: 0.4rem;
    transition: transform 0.2s ease-out;
        &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-out;   
        }
        &:active{
          color:#6cf7a6; 
        }
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
  z-index:1;
`;

const ModalView = styled.div`
  width: 30rem;
  height: 20rem;
  border-radius: 10px;
  background-color: white;
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
    background-color: #1564a9;
    transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
     
    }
    &:nth-child(1) {
      background-color: #05c299;
      color: white;
    }
   
    &:active {
      color: #1564a9;    }
  }
`;

const EditProfile = ({ authState, handleAuthState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nickname, setNickname] = useState(authState.nickname)
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const inputhere = useRef()

  const openModalHandlerMypage = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };
 const nicknameHandler = (e) => {
  setNickname(e.target.value)
 }
  const profileHandler = () => {

if(inputhere.current.value === "") {
  document.querySelector('.errorMessage').textContent = "최소 한 글자 이상의 단어를 적어주세요"
 
}  else {
    axios.put('http://localhost:4001/users', {nickname},  {headers: { accesstoken: sessionStorage.getItem("accesstoken")}})
    .then(response => {

      const nextNickname = response.data.nickname
  
      handleAuthState(nextNickname)
      openModalHandler()
      window.location.replace("/Mypage")
    })
    .catch(err => {
      console.log(err);
    })
}
   
  
  }

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
            <h1>변경할 닉네임을 입력해 주세요</h1>
            <InputsInColumn>
              <div className="errorMessage" style={{ color: "Red" }}></div>
              <input ref={inputhere}  onChange={nicknameHandler} placeholder="바꿀닉네임"></input>
            </InputsInColumn>
            <Controllers>
              <button onClick={profileHandler}>수정하기</button>
              <button onClick={openModalHandler}>cancel</button>
              <Withdraw
                authState={authState}
                openModalHandlerMypage={openModalHandlerMypage}
              />
            </Controllers>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default EditProfile;
