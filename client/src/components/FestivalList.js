import React from "react";
import Festival from "./Festival";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60rem;
  padding: 0;
  /* background-color: #f2d29b; */
  
  /* padding: 0.5em; */
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: -2rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const FestivalList = ({authState, festivals, pickItems,togglePick }) => {
 // console.log(festivals);
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
          authState={authState}
            togglePick={togglePick}
            key={festival.content_id}
            festival={festival}
            pickItems={pickItems}
          />
        ))}
      </Wrapper>
    );
  }
};

export default FestivalList;
