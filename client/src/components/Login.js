import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import styled from "styled-components";
import axios from "axios";
const ModalContainer = styled.div`
  width: 30rem;
  height: 100%;
  text-align: center;
  &>button{
    width: 20%;
    height: 100%;
    border: none;
    background-color: #faa08e;
    color: white;
    font-weight: bolder;
    font-size: larger;
    transition: 0.2s ease-out;
   

    &:hover{
      background-color: #fb505e;
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

const LoginControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  height: 8em;
`;

const InputsInColumn = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    margin: 0.2rem;
  }
`;

const ButtonsInRow = styled.div`
  display: flex;
  & > button {
    height: 2rem;
    margin: 0.2rem;
    font-size: 28px;
    font-weight: bold;
  }
`;

const Login = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
const [password, setPassword] = useState('');
  
  const handleUserId = (e) => {
    setUserId(e.target.value);
  }
 const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      //# 유효성 검증 후 서버에 회원가입 정보 전송 (주석 해제)
      axios.post("http://localhost:4001/signin", {user_id : userId, password : password})
      .then(response => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          //# 토큰을 받아왔으면  토큰을 저장한다.
          // localStorage.setItem("accessToken", response.data.token);
          console.log(response.data.message);
          //# 토큰 설정
          loginHandler();
        }
      })
      .catch(err => {
        console.log(err);
      })
     
    // }
   
  ;
  }

  


  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const openModalHandlerLogin = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <button onClick={openModalHandler}>Log In</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Login Component</h1>
            <LoginControl>
            <form onSubmit={(e) => { handleSubmit(e) }}>
              <InputsInColumn>
              <label >
            아이디 
          <input type="text" value={userId} required onChange={(e)=> { handleUserId(e) }} /><br />
          </label>
          <label>
            비밀번호
          <input type="password" value={password} required onChange={(e) => { handlePassword(e) }} /><br />
          </label>
              </InputsInColumn>
              <ButtonsInRow>
              <input type="submit" value="로그인하기" />
              </ButtonsInRow>
              </form>
            </LoginControl>
            <Signup openModalHandlerLogin={openModalHandlerLogin} />
                <button className="close-btn" onClick={openModalHandler}>
                  cancel
                </button>
            <div>
              <button>구글 로그인</button>
              <button>카카오 로그인?</button>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Login;
