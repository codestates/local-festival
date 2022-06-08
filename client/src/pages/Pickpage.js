import React from "react";
import Picklist from "../components/Picklist";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  border: 1px solid black;
`;

const Pickpage = ({ festivalData, pickItems, removePick }) => {
  return (
    <Wrapper>
      <div>
        <h1>My Pick!</h1>
      </div>
      <Picklist
        removePick={removePick}
        festivalData={festivalData}
        pickItems={pickItems}
      />
      <Link to="/">
        <button className="gobackmainpage">메인페이지로 돌아가기</button>
      </Link>
    </Wrapper>
  );
};

export default Pickpage;
