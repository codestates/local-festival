import React, { useState } from "react";
import DescTab from "../components/DescTab";
import Moveloginpick from "../components/Moveloginpick";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ReviewTab from "../components/ReviewTab";

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  height: 80vh;
  justify-content: space-evenly;
`;

const ImageAndPickbtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: yellow;
  & > img {
    height: 50%;
  }
`;
const TabAndDesc = styled.div`
  width: 80%;
  height: 100%;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Tab = styled.div`
  width: 100%;
  height: 10%;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  /* margin-bottom: 7rem; */

  .submenu {
    width: 100%;
    height: 100%;
    /* padding: 15px 10px; */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .focused {
    background-color: blue;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Detailviewpage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { state } = useLocation();
  console.log(state);
  const { image, title } = state;

  const tabArr = [
    { name: "상세정보", content: <DescTab festivalInfo={state} /> },
    { name: "리뷰", content: <ReviewTab /> },
  ];
  return (
    <Wrapper>
      <ImageAndPickbtn>
        <img src={image} alt={`${title} : 이미지가 존재하지 않습니다.`}></img>
        <Moveloginpick />
        <Link to="/">
          <button>메인페이지로 돌아가기</button>
        </Link>

        <div>평균평점?</div>
        <div>태그?</div>
        <div>뭐들어가면좋을지</div>
      </ImageAndPickbtn>
      <TabAndDesc>
        <Tab>
          {tabArr.map((ele, index) => {
            return (
              <div
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => setCurrentTab(index)}
              >
                {ele.name}
              </div>
            );
          })}
        </Tab>
        {tabArr[currentTab].content}
      </TabAndDesc>
    </Wrapper>
  );
};

export default Detailviewpage;
