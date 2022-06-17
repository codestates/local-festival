import React from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  border: 1px 0 0 0  solid black;
  /* margin: 1rem; */
  border-radius: 0 0 1rem 1rem;
  background-color: #f7f5f2c8;
  padding: 1rem;

  & h2{
    margin-top: 4rem;
  }

  & hr {
    margin-bottom: 0.5rem;
  }

  /* &>hr:nth-child() {
    margin-top: 1rem;
  } */
`;

const DescTab = ({ festivalInfo }) => {
  // 탭메뉴의 상태가 detail(상세정보)이면 특정 행사정보 렌더링
  //             review면 review 컴포넌트 렌더링
  const { location, overview, tel, title, url, start_date, end_date } =
    festivalInfo;

   
  let parsedUrl = "";
  if (url !== "undefined") {
    parsedUrl = url.split(" ")[1].slice(5).replace(/"/g, "");
  } else {
    parsedUrl = null;
  }
  return (
    <Wrapper>
      <h1>{title}</h1>
      <hr></hr>
      <h2>개요 </h2>
      <hr></hr>
      <p>{overview}</p>
      <h2>축제 기간</h2>
      <hr></hr>
      {moment(start_date, "YYYY.MM.DD").format("YYYY년 MM월 DD일")} ~ {moment(end_date, "YYYY.MM.DD").format("YYYY년 MM월 DD일")}
      <h2>Location</h2>
      <hr></hr>
      {location}
      <h2>문의</h2>
      <hr></hr>
      <a href="tel:{tel}">{tel}</a>
      
      <h2>홈페이지</h2>
      <hr></hr>
      <a href={parsedUrl} target="_blank" rel="noreferrer">
        링크
      </a>
    </Wrapper>
  );
};

export default DescTab;
