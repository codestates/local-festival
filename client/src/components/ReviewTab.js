import React from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewWrite from "./ReviewWrite";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f5f2c8;
  overflow: hidden; // 안해주면 줄어들음
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & > * {
    margin: 0.5rem;
  }
`;

const ReviewTab = ({festivalInfo}) => {
const festival_id = festivalInfo.id
  return (
    <Wrapper>
      <ReviewList festivalInfo={festivalInfo} festival_id={festival_id} />
      <ReviewWrite festival_id={festival_id} />
    </Wrapper>
  );
};

export default ReviewTab;
