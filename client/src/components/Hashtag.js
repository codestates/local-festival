import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10%;
  border: 1px solid black;
`;

const Hashtag = () => {
  return (
    <Wrapper>
      <div>#1월</div>
      <div>#강원</div>
    </Wrapper>
  );
};

export default Hashtag;
