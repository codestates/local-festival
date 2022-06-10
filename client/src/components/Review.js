import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  /* height: 30%; */
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0.4rem;
  padding: 0.3rem;
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
