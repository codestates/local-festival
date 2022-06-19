import React from "react";
import Navigationbar from "./Navigationbar";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 5em;
  width: 100%;
  text-align: center;
  background-color: #1564a9;
  border: none;
  /* margin: 1em; */
  position: relative;

  & > h1{
  font-size: 3rem;
  cursor: pointer;
  font-style: italic;
  font-family: 'HS-Regular';
  color: white;
  /* position: absolute;
  left: 2rem; 
  top: 0.5rem;  */
  margin: 0.7rem 1rem;
  }
  

`;




const Header = ({ authState, loginHandler }) => {

  

  const onClickReload = ()=>{
    window.location.replace("/")
  }
  return (
    <Wrapper>
      
        
            <h1 onClick={onClickReload}>나가노라</h1>
        
    

      <Navigationbar loginHandler={loginHandler} authState={authState} />
    </Wrapper>
  );
};

export default Header;
