import React from "react";
import Festival from "./Festival";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 2rem;
  padding: 0;
  /* background-color: #f2d29b; */
  
  /* padding: 0.5em; */
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const FestivalList = ({ festivals, addPick }) => {
  console.log(festivals);
  if (!festivals) {
    return (
      <div>
        <h1>축제 정보가 업스무니다</h1>
      </div>
    );
  } else {
    return (
      <Wrapper>
        {festivals.map((festival) => (
          <Festival
            addPick={addPick}
            key={festival.content_id}
            festival={festival}
          />
        ))}
      </Wrapper>
    );
  }
};

export default FestivalList;
