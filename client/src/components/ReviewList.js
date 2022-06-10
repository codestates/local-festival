import React from "react";
import Review from "./Review";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 97%;
  height: 70%;
  border: 1px solid black;
  border-radius: 0.5rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const ReviewList = () => {
  return (
    <Wrapper>
      <h3>ReviewList Component</h3>

      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <b>pagenation으로 구현하면 좋을 것 같음</b>
    </Wrapper>
  );
};

export default ReviewList;
