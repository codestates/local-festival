import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 3px solid blue;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Pick = () => {
  return (
    <Wrapper>
      <Info>
        <div>picknumber & pickdate</div>
        <div>Festival image</div>
        <div>Festival title</div>
        <div>Festival period</div>
        <div>costs</div>
      </Info>
      <button className="pick-x">찜해제</button>
    </Wrapper>
  );
};

export default Pick;
