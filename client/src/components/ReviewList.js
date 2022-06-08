import React from "react";
import Review from "./Review";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: yellowgreen;
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
    </Wrapper>
  );
};

export default ReviewList;
