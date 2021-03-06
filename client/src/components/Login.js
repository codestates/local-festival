import React from "react";
import { useState, useRef } from "react";
import Signup from "./Signup";
import styled from "styled-components";
import axios from "axios";
import { RiAccountCircleFill } from "react-icons/ri";
const ModalContainer = styled.div`
 
  height: 100%;

  & > button {
    /* width: 20%; */
    height: 100%;
    border: none;
    background-color: #1564a9;
    color: white;
    font-weight: bolder;
    font-size: larger;
    transition: all 0.3s ease-in;
   & > *:hover {
    color: #6cf7a6;
    transition: all 0.2s ease-out;
      cursor: pointer; ;
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
  background-color: white;
  box-sizing: border-box;
  padding: 1rem;
  width: 30rem;
  height: 55vh;
  & > h1 {
    /* margin-top: 1rem;
    margin-bottom: 1rem; */
  }
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
  /* display: relative; */
  & > label > input {
    margin: 5px;
    width: 15rem;
    height: 30px;
  }
`;

const LoginButton = styled.div`
  display: flex;
  & > input {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 15px;
    margin-left: 32px;
    margin-bottom: 15px;

    /* 크기 */
    height: 2rem;
    width: 15rem;
    font-size: 1rem;
    transition: transform 0.2s ease-out;
    /* 색상 */
    background-color: #1564a9;
    &:hover {
      transform: scale(1.1);
    
    }
    &:active {
      color: #6cf7a6;
    }
  }
`;

const GoogleLoginControl = styled.div`
  display: relative;
  button {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 4px;
    margin-bottom: 15px;

    /* 크기 */
    height: 2rem;
    width: 15rem;
    font-size: 1rem;

    /* 색상 */
    background: #4285f4;
    transition: transform 0.2s ease-out;
        &:hover {
    transform: scale(1.1);;
    }
    &:active {
      background: #2366d2;
    }
  }
`;

const KakaoLoginControl = styled.div`
  display: relative;
  button {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: #000000c1;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 15px;

    /* 크기 */
    height: 2rem;
    width: 15rem;
    font-size: 1rem;

    /* 색상 */
    background: #fee500;
    transition: transform 0.2s ease-out;
        &:hover {
    transform: scale(1.1);
    }
    &:active {
      background: #ccb801;
    }
  }
`;

const CancelControl = styled.div`
  display: relative;
  button {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 0.5rem;

    /* 크기 */
    height: 2rem;
    width: 6.5rem;
    font-size: 1rem;

    /* 색상 */
    background-color: #1564a9;
    transition: transform 0.2s ease-out;
        &:hover {
    transform: scale(1.1);
   
   
    }
    &:active {
      color: #6cf7a6;    }
  }
`;

const ErrorMessage = styled.div`
color: red;
font-weight: bold;
`

const Login = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //# 유효성 검증 후 서버에 회원가입 정보 전송 (주석 해제)
    axios
      .post("http://localhost:4001/users/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
      
          //# 토큰과 유저정보를 받아온다.
          // localStorage.setItem("accessToken", response.data.token);
          sessionStorage.setItem("accesstoken", response.data.data.token);

          const { nickname, user_id, username } = response.data.data;
          //# 토큰 설정
        //  console.log('ㄴㅓㅁ어와???', response.data.data);
          loginHandler(user_id, username, nickname, true);
        // }
      })
      .catch((err) => {
        console.log(err.response.data.message);
       if(err.response.data.message === "Wrong Username And Password Combination") {
        errorMessage.current.textContent = "비밀번호가 일치하지 않습니다"
       
       } else if(err.response.data.message === "User Doesn't Exist"){
        errorMessage.current.textContent = "사용자가 존재하지 않습니다"
       } else {
        console.log('그밖에에러');
       }
      });

    // }
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const openModalHandlerLogin = () => {
    console.log("here!!!!");
    setIsOpen(!isOpen);
  };

  const errorMessage = useRef()

  return (
    <ModalContainer>
      <button onClick={openModalHandler}><RiAccountCircleFill size={45}/></button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>로그인</h1>
           
              <ErrorMessage ref={errorMessage}></ErrorMessage>
            <LoginControl>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <InputsInColumn>
                  <label style={{fontWeight:"bold"}}>
                    아이디 &ensp;
                    <input
                      type="text"
                      value={username}
                      required
                      onChange={(e) => {
                        handleUserName(e);
                      }}
                    />
                    <br />
                  </label>
                  <label  style={{fontWeight:"bold"}}>
                    비밀번호
                    <input
                      type="password"
                      value={password}
                      required
                      onChange={(e) => {
                        handlePassword(e);
                      }}
                    />
                    <br />
                  </label>
                </InputsInColumn>
                <LoginButton>
                  <input type="submit" value="로그인하기" />
                </LoginButton>
              </form>
            </LoginControl>
            <Signup openModalHandlerLogin={openModalHandlerLogin} />
            <GoogleLoginControl>
              <button>Sigin in with Google</button>
            </GoogleLoginControl>
            <KakaoLoginControl>
              <button>Login with Kakao</button>
            </KakaoLoginControl>
            <CancelControl>
              <button className="close-btn" onClick={openModalHandler}>
                취소하기
              </button>
            </CancelControl>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Login;
