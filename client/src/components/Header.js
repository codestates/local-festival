import React from "react";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 80vw;
  text-align: center;
  background-color: #f9ed91;
  border: none;
  margin: 1em;
`;

const Header = ({ isLogin, loginHandler }) => {
  return (
    <Wrapper>
      <Link to="/">
        <div>로고</div>
      </Link>

      <Navigationbar loginHandler={loginHandler} isLogin={isLogin} />
    </Wrapper>
  );
};

export default Header;
