import React from "react";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  text-align: center;
  background-color: #faa08e;
  border: none;
  /* margin: 1em; */
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
  box-shadow: 0 1px 0 1px #dadce0;
  margin-bottom: 1em;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const Header = ({ isLogin, loginHandler }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>
          <h2>나가노라</h2>
        </Title>
        {/* <img className="logo" src="img/playoutside.png" alt="playoutside" /> */}
      </Link>

      <Navigationbar loginHandler={loginHandler} isLogin={isLogin} />
    </Wrapper>
  );
};

export default Header;
