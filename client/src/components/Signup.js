import axios from "axios";
import React, { useState, useRef } from "react";
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

// const ErrorMessage = styled.div`
// height: 10rem;
// background-color: aliceblue;
// color: red;
// `

const Signup = ({ openModalHandlerLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // const errorMessage = useRef()
  // errorMessage.textContent = 'aaa'
  const handleUserId = (e) => {
    setUserId(e.target.value);
  }
  const handleNickname = (e) => {
    setNickname(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      console.log("password Not Match");
      // errorMessage.textContent = 'eeorr'
      // console.log(errorMessage);
      document.body.querySelector(".errorMessage").textContent = '비밀번호가 일치하지 않습니다'
    } else {
      //# 유효성 검증 후 서버에 회원가입 정보 전송 (주석 해제)
      axios.post("http://localhost:4001/users/signup", {user_id : userId, password : password, nickname : nickname})
      .then(response => {
        console.log(response.data.message);
      })
      .catch(err => {
        console.log(err);
      })
     
    }
  
  }



  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerLogin();
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}>Sign up</button>
      {isOpen ? (
        <ModalBackdrop
          onClick={() => {
            openModalHandler();
            openModalHandlerLogin();
          }}
        >
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Signup Component</h1>
            <div className="Signup-view-inputs">
              {/* <ErrorMessage ref={errorMessage} ></ErrorMessage> */}
              <div className="errorMessage" style={{color : "Red"}}></div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
          <label >
            아이디 
          <input type="text" value={userId} required onChange={(e)=> { handleUserId(e) }} /><br />
          </label>
          <label >
            닉네임
          <input type="text" value={nickname} required onChange={(e)=> { handleNickname(e) }} /><br />
          </label>
          
          <label>
            비밀번호
          <input type="password" value={password} required onChange={(e) => { handlePassword(e) }} /><br />
          </label>
          <label>
           비밀번호 확인
          <input type="password" value={passwordCheck} required onChange={(e) => { handlePasswordCheck(e) }} /><br />
          </label>
         
          <input type="submit" value="계정만들기" />
        </form>
            
            </div>
            <div className="Signup-view-buttons">
             
              <div>
                <button
                  className="close-btn"
                  onClick={() => {
                    openModalHandler();
                    openModalHandlerLogin();
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

export default Signup;
