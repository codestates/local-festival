import React, { useState } from "react";
import Tab from "../components/Tab";
import Desc from "../components/Desc";
import Moveloginpick from "../components/Moveloginpick";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  justify-content: space-evenly;

  & > img {
    width: 20em;
    object-fit: contain;
    border-radius: 2.5em;
  }
`;
const TabAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50em;
`;

const Imagepickbutton = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detailviewpage = () => {
  const { state } = useLocation();
  console.log(state);
  const { image } = state;

  return (
    <Wrapper>
      <Imagepickbutton>
        <img src={image} alt="이미지"></img>
        <Moveloginpick />
      </Imagepickbutton>
      <TabAndDesc>
        <Tab />
        <Desc festivalInfo={state} />
        <Link to="/">
          <button className="gobackmainpage">메인페이지로 돌아가기</button>
        </Link>
      </TabAndDesc>
    </Wrapper>
  );
};

export default Detailviewpage;
