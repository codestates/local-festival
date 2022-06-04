import React from "react";
import Pick from "./Pick";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 3px solid yellowgreen;
`;
const Picklist = () => {
  return (
    <Wrapper>
      <Pick />
      <Pick />
      <Pick />
    </Wrapper>
  );
};

export default Picklist;
