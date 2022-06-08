import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /* height: 30%; */
  margin-bottom: 1rem;
  background-color: gold;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;
const Review = () => {
  return (
    <Wrapper>
      <b>Review component</b>
      <ul>
        <li>작성자</li>
        <li>작성일시</li>
        <li>작성내용</li>
        <li>평점</li>
        <li>태그</li>
      </ul>
    </Wrapper>
  );
};

export default Review;
