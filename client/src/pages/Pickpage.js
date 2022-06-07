import React from "react";
import Picklist from "../components/Picklist";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  border: 1px solid black;
`;

const Pickpage = ({ festivalData, pickItems, removePick }) => {
  return (
    <Wrapper>
      <div>
        <h1>My Pick!</h1>
      </div>
      <Picklist
        removePick={removePick}
        festivalData={festivalData}
        pickItems={pickItems}
      />
    </Wrapper>
  );
};

export default Pickpage;
