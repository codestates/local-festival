import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  border: 1px solid black;
  margin: 1rem;
  border-radius: 1rem;
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
      <h3>Title</h3>
      {title}
      <h3>Overview </h3>
      <p>{overview}</p>
      <h3>period</h3>
      {start_date} ~ {end_date}
      <h3>Location</h3>
      {location}
      <h3>Tel</h3>
      {tel}
      <h3>URL</h3>
      <a href={parsedUrl} target="_blank" rel="noreferrer">
        축제 홈페이지
      </a>
    </Wrapper>
  );
};

export default DescTab;
