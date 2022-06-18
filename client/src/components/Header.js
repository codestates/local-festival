import React from "react";
import Navigationbar from "./Navigationbar";
import { Link, useNavigate } from "react-router-dom";
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

const Title = styled.div`


  font-family: 'HS-Regular';
  color: white;
  width: 12rem;
  height: 4rem;
  background-color: #383804;
  & > h1{
    font-size: 3rem;
  cursor: pointer;
  font-style: italic;
  }
 margin: 1rem;
  /* position: relative;
  left: 1rem; */
  
//   font-size: 25px;
//   /* font-family: "ulsanjunggu"; */
//   font-family: 'HS-Regular';
//   color: white;
//   text-align: center;
//   /* line-height: 1.6; */
//   position: absolute;
//   top: 50%;
//   /* width: 10rem; */
//   left: 4.5rem;
//   height: 100%;
//   transform: translate(-50%, -50%);
//   font-style: italic;
//   /* background-color: #f43e4d; */
//   padding: 0.5rem;
//   border-radius: 0.1rem;
//   /* box-shadow: 0 1px 0 1px #dadce0; */
//   margin-bottom: 1em;
//   /* & img {
//     width: 100%;
//     height: 100%;
//   } */
  
 `; 



const Header = ({ authState, loginHandler }) => {

  let navigate = useNavigate()

  const navi = ()=>{
    navigate("/")
  }
  return (
    <Wrapper>
      
        
            <h1 onClick={navi}>나가노라</h1>
        
    

      <Navigationbar loginHandler={loginHandler} authState={authState} />
    </Wrapper>
  );
};

export default Header;
