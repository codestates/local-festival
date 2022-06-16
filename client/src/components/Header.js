import React from "react";
import Navigationbar from "./Navigationbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  text-align: center;
  background-color: #faa08e;
  border: none;
  /* margin: 1em; */
  position: relative;
`;

const Title = styled.div`
  font-size: 25px;
  /* font-family: "ulsanjunggu"; */
  font-family: 'HS-Regular';
  color: white;
  text-align: center;
  line-height: 1.6;
  position: absolute;
  top: 50%;
  width: 10rem;
  left: 4.5rem;
  height: 100%;
  transform: translate(-50%, -50%);
  font-style: italic;
  background-color: #f43e4d;
  padding: 0.5rem;
  border-radius: 0.1rem;
  /* box-shadow: 0 1px 0 1px #dadce0; */
  margin-bottom: 1em;
  /* & img {
    width: 100%;
    height: 100%;
  } */
  
`;

const Header = ({ authState, loginHandler }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>
          <h2>나가노라</h2>
        </Title>
        {/* <img className="logo" src="img/playoutside.png" alt="playoutside" /> */}
      </Link>

      <Navigationbar loginHandler={loginHandler} authState={authState} />
    </Wrapper>
  );
};

export default Header;
