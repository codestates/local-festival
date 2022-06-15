import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";

import styled from "styled-components";



const ButtonsWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  
  /* background-color: blue; */
  width: 20rem;
  height: 100%;
 & > a{
  width: 6rem;
  line-height: 4;
  font-size: larger;
  font-weight: bolder;
  color: white;
  text-decoration:none;
  /* background-color: #f56f54cb; */
  transition: 0.2s ease-out;
    &:hover{
      background-color: #f56f54;
      transition: all 0.2s ease-in;
    }
  
 }

`;

const Navigationbar = ({ authState, loginHandler }) => {
  // console.log(isLogin);
  return (  
    <> 
      {authState.loginStatus ? (
        <ButtonsWrapper>
          <Link to="/Mypage">Mypage</Link>
          <Logout loginHandler={loginHandler} />
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <Login loginHandler={loginHandler} />
        </ButtonsWrapper>
      )}
    </>
  );
};

export default Navigationbar;
