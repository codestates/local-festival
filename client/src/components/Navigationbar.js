import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import styled from "styled-components";



const ButtonsWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  
  background-color: blue;
  /* width: 20rem; */
  height: 100%;
  position: absolute;
  right:5rem;
 

`;

const Navigationbar = ({ authState, loginHandler }) => {
  // console.log(isLogin);
  return (  
    <> 
      {authState.loginStatus ? (
        <ButtonsWrapper>
          <Link to="/Mypage"><RiAccountCircleFill size={45}/></Link>
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
