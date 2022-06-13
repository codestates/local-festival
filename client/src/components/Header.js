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
  position: relative;
`;

const Title = styled.div`
  font-size: 25px;
  font-family: "ulsanjunggu";
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 4em;
  transform: translate(-50%, -50%);
`;

const Header = ({ isLogin, loginHandler }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>
          <h2>나가노라</h2>
        </Title>
        <img className="logo" src="img/playoutside.png" alt="playoutside" />
      </Link>

      <Navigationbar loginHandler={loginHandler} isLogin={isLogin} />
    </Wrapper>
  );
};

export default Header;
