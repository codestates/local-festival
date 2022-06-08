import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Desc = ({ festivalInfo }) => {
  // 탭메뉴의 상태가 detail(상세정보)이면 특정 행사정보 렌더링
  //             review면 review 컴포넌트 렌더링
  const { location, overview, tel, title, url, start_date, end_date } =
    festivalInfo;

  return (
    <Wrapper>
      {/* {tabStatus === 'info' ? <Info /> : <Review />} // info 면 상세정보, review면 리뷰정보  */}
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
      {/* 파싱안됨ㅠㅠ */}
      {url}
    </Wrapper>
  );
};

export default Desc;
