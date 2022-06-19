import React from "react";
import Picklist from "../components/Picklist";
import styled from "styled-components";
import EditProfile from "../components/EditProfile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60rem;
  /* border: 1px solid black; */
  /* font-family: "EarlyFontDiary"; */
`;

const Nav = styled.div`
  /* border: 1px solid black; */
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  /* justify-content: flex-end; */

  height: 4rem;
  width: 30rem;
  /* background-color: red; */
  margin-top: 1rem;
//  & button {
//    border: none;
//    width: 8rem;
//    /* height: 100%; */
//    margin-left: 1rem;
//    background-color: #faa08e;
//    color: white;
//    font-size: larger;
//    font-weight: bold;
//    border-radius: 0.4rem;
//    transition: transform 0.2s ease-out;
//
//    &:hover {
//      transform: scale(1.1);
//      background-color: #f8826b;
//
//      & > div,
//      border {
//        /* background-color: #88b85c; */
//        background-color: #f8826b;
//      }
//    }
//  }
`;

const Mypage = ({ authState,handleAuthState,festivalData, pickItems, togglePick }) => {
  const {nickname} = authState

  
  return (
    <Wrapper>
      <Nav>
        <EditProfile authState={authState} handleAuthState={handleAuthState} />
       
          {/* <button onClick={()=>{navigate("/")}}>
            메인페이지로 <br></br>돌아가기
          </button> */}
       
      </Nav>
      <h1> {nickname}님이 찜하신 축제들 입니다</h1>
      <Picklist
        togglePick={togglePick}
        festivalData={festivalData}
        pickItems={pickItems}
      />
    </Wrapper>
  );
};

export default Mypage;
