import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 97%;
  height: 20%;
  border: 1px solid black;
  border-radius: 0.5rem;
  overflow-y: auto;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const ReviewWrite = () => {
  return (
    <Wrapper>
      <h3>ReviewWrite component</h3>
      <textarea placeholder="후기적기?"></textarea>

      <fieldset>
        <legend>
          태그 : 태그 클릭으로 직관적으로 바꾸기, 선택지 추가, 중복허용
        </legend>

        <input type="checkbox" id="stroller" name="stroller" />
        <label htmlFor="stroller">유모차?</label>
        <input type="checkbox" id="bmw" name="bmw" />
        <label htmlFor="bmw">대중교통이용?</label>
        <input type="checkbox" id="park" name="park" />
        <label htmlFor="park">주차장</label>

        <input type="checkbox" id="pet" name="pet" />
        <label htmlFor="pet">반려견허용</label>
      </fieldset>
      <fieldset>
        <legend>별점 : 별클릭으로 직관적으로 바꾸기</legend>
        <input type="radio" id="1" name="rating" />
        <label htmlFor="1">⭐️</label>

        <input type="radio" id="2" name="rating" />
        <label htmlFor="2">⭐️⭐️</label>

        <input type="radio" id="3" name="rating" />
        <label htmlFor="3">⭐️⭐️⭐️</label>
        <input type="radio" id="3" name="rating" />
        <label htmlFor="4">⭐️⭐️⭐️⭐️</label>
        <input type="radio" id="3" name="rating" />
        <label htmlFor="5">⭐️⭐️⭐️⭐️⭐️</label>
      </fieldset>
      <button>리뷰올리기</button>
    </Wrapper>
  );
};

export default ReviewWrite;
