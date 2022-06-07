import React from "react";
import Mypage from "../pages/Mypage";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Navigationbar = ({ isLogin, loginHandler }) => {
  console.log(isLogin);
  return (
    <Wrapper>
      {isLogin ? (
        <ButtonsWrapper>
          <Mypage />
          <Link to="/Pickpage">
            <button>pickpage</button>
          </Link>
          <Logout loginHandler={loginHandler} />
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <Link to="/Pickpage">
            <button>pickpage</button>
          </Link>
          <Login loginHandler={loginHandler} />
        </ButtonsWrapper>
      )}
    </Wrapper>
  );
};

export default Navigationbar;
