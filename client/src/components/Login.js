import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import styled from "styled-components";
import axios from "axios";
import { RiAccountCircleFill } from "react-icons/ri";
const ModalContainer = styled.div`
  /* position: relative;
  left: 10rem; */
  height: 100%;
  /* text-align: center; */
  & > button {
    /* width: 20%; */
    height: 100%;
    border: none;
    background-color: #1564a9;
    color: white;
    font-weight: bolder;
    font-size: larger;
    transition: 0.2s ease-out;
   & > *:hover {
    color: #6cf7a6;
    transition: all 0.2s ease-in;
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
  background-color: #faf7f2;
  box-sizing: border-box;
  padding: 1rem;
  width: 40vw;
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
    &:hover {
      background: #4285f4;
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
    &:hover {
      background: #fee500;
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
    background: #faa08e;
    &:hover {
      background: #fd937e;
    }
    &:active {
      background: #f56f54;
    }
  }
`;

const Login = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //# 유효성 검증 후 서버에 회원가입 정보 전송 (주석 해제)
    axios
      .post("http://localhost:4001/users/signin", {
        user_id: userId,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          //# 토큰과 유저정보를 받아온다.
          // localStorage.setItem("accessToken", response.data.token);
          sessionStorage.setItem("accesstoken", response.data.data.token);

          const { nickname, user_id } = response.data.data;
          //# 토큰 설정
          loginHandler(nickname, user_id, true);
        }
      })
      .catch((err) => {
        console.log(err);
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
            <LoginControl>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <InputsInColumn>
                  <label>
                    아이디 &ensp;
                    <input
                      type="text"
                      value={userId}
                      required
                      onChange={(e) => {
                        handleUserId(e);
                      }}
                    />
                    <br />
                  </label>
                  <label>
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
                cancel
              </button>
            </CancelControl>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Login;
