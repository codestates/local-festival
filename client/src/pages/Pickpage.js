import React from "react";
import Picklist from "../components/Picklist";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
`;

const Pickpage = () => {
  return (
    <Wrapper>
      <div>My Pick!</div>
      <Picklist />
    </Wrapper>
  );
};

export default Pickpage;
