import axios from "axios";
import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
  /* height: 15rem; */

  text-align: center;
  & > button {
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 15px;
    /* margin-left: 32px; */
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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
const SignupViewInputs = styled.div`
  display: flex;

  flex-direction: column;

  /* display: relative; */

  & > label > input {
    margin: 5px;
    width: 15rem;
    height: 30px;
  }
`;
// const ErrorMessage = styled.div`
// height: 10rem;
// background-color: aliceblue;
// color: red;
// `
const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
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
    /* margin-left: 32px; */
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
const InputsInColumn = styled.div`
  display: flex;

  justify-content: center;
  margin: 0 auto;
  width: 23rem;
  height: 13rem;
  flex-direction: column;

  /* display: relative; */
  & > label {
    float: left;
    text-align: left;
    line-height: 2.8rem;
  }
  & > label > input {
    margin: 5px;
    width: 15rem;
    height: 30px;
    float: right;
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

const Signup = ({ openModalHandlerLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // const errorMessage = useRef()
  // errorMessage.textContent = 'aaa'
  const handleUserId = (e) => {
    setUserId(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      console.log("password Not Match");
      // errorMessage.textContent = 'eeorr'
      // console.log(errorMessage);
      document.body.querySelector(".errorMessage").textContent =
        "비밀번호가 일치하지 않습니다";
    } else {
      //# 유효성 검증 후 서버에 회원가입 정보 전송 (주석 해제)
      axios
        .post("http://localhost:4001/users/signup", {
          user_id: userId,
          password: password,
          nickname: nickname,
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // openModalHandlerLogin();
  };
  return (
    <ModalContainer>
      <button onClick={openModalHandler}>회원가입 하기</button>
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
            <h1>회원가입 하기</h1>
            <SignupViewInputs>
              {/* <ErrorMessage ref={errorMessage} ></ErrorMessage> */}
              <div className="errorMessage" style={{ color: "Red" }}></div>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <InputsInColumn>
                  <label>
                    아이디
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
                    닉네임
                    <input
                      type="text"
                      value={nickname}
                      required
                      onChange={(e) => {
                        handleNickname(e);
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
                  <label>
                    비밀번호 확인
                    <input
                      type="password"
                      value={passwordCheck}
                      required
                      onChange={(e) => {
                        handlePasswordCheck(e);
                      }}
                    />
                    <br />
                  </label>
                </InputsInColumn>

                <SignUpButton>
                  <input type="submit" value="회원가입" />
                </SignUpButton>
              </form>
            </SignupViewInputs>
            <div className="Signup-view-buttons">
              <CancelControl>
                <button
                  className="close-btn"
                  onClick={() => {
                    openModalHandler();
                    openModalHandlerLogin();
                  }}
                >
                  취소하기
                </button>
              </CancelControl>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Signup;
