import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import {useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import styled from "styled-components";



const ButtonsWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  
  /* background-color: blue; */
  /* width: 20rem; */
  height: 100%;
  position: absolute;
  right:5rem;
 

`;

const Button = styled.button`
background: inherit ; 
border:none;
 box-shadow:none;
  border-radius:0; 
  padding:0; 
  overflow:visible;
   cursor:pointer;
   color: #6cf7a6;
`


const Navigationbar = ({ authState, loginHandler }) => {

  let navigate = useNavigate()

  const onClickMoveMypage = ()=>{
    navigate("/MyPage")
  }
  


  // console.log(isLogin);
  return (  
    <> 
      {authState.loginStatus ? (
        <ButtonsWrapper>
          <Button>
            <RiAccountCircleFill onClick={onClickMoveMypage} size={45}/>
          </Button>
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
