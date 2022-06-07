import React from "react";
import Festival from "./Festival";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0.5em;
  height: 80%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  height: 40vh;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  background-color: #faf7f2;
  padding: 0;
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
          <Festival addPick={addPick} key={festival.id} festival={festival} />
        ))}
      </Wrapper>
    );
  }
};

export default FestivalList;
