import React from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewWrite from "./ReviewWrite";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  overflow-y: auto; // 안해주면 줄어들음
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */
`;

const Review = () => {
  return (
    <Wrapper>
      <ReviewList />
      <ReviewWrite />
    </Wrapper>
  );
};

export default Review;
