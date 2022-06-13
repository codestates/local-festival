import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10%;
  border: 1px solid black;
`;

const Hashtag = () => {
  return (
    <Wrapper>
      <div>
        <button>#1월</button>
        <button>#2월</button>
        <button>#3월</button>
        <button>#4월</button>
        <button>#5월</button>
        <button>#6월</button>
        <button>#7월</button>
        <button>#8월</button>
        <button>#9월</button>
        <button>#10월</button>
        <button>#11월</button>
        <button>#12월</button>
      </div>
      <div>
        <button>#서울</button>
        <button>#경기</button>
        <button>#강원</button>
        <button>#충청</button>
        <button>#전라</button>
        <button>#경상</button>
      </div>
    </Wrapper>
  );
};

export default Hashtag;
