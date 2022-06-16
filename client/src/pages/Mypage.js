import React from "react";
import Picklist from "../components/Picklist";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EditProfile from "../components/EditProfile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  /* border: 1px solid black; */
  /* font-family: "EarlyFontDiary"; */
`;

const Nav = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  margin-top: 1rem;
  & button {
    border: none;
    width: 8rem;
    height: 100%;
    margin-left: 1rem;
    background-color: #faa08e;
    color: white;
    font-size: larger;
    font-weight: bold;
    border-radius: 0.4rem;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: scale(1.1);
      background-color: #f8826b;

      & > div,
      border {
        /* background-color: #88b85c; */
        background-color: #f8826b;
      }
    }
  }
`;

const Pickpage = ({ festivalData, pickItems, removePick }) => {
  return (
    <Wrapper>
      <Nav>
        <EditProfile />
        <Link to="/">
          <button>
            메인페이지로 <br></br>돌아가기
          </button>
        </Link>
      </Nav>
      <h1>My Pick!</h1>
      <Picklist
        removePick={removePick}
        festivalData={festivalData}
        pickItems={pickItems}
      />
    </Wrapper>
  );
};

export default Pickpage;
