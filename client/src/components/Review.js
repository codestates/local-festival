import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  /* height: 30%; */
  margin-bottom: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem  gray;

  /* border: 2px solid #e6a5a5; */
  background-color: #fcd5ce;
  border-radius: 0.5rem;
  margin: 0.4rem;
  padding: 0.3rem;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;
const Review = ({review}) => {
  // console.log(review);
  return (
    <Wrapper>
      <h3>  <span style={{color:"#ec5b5b", fontStyle:"italic"}}>{review.nickname}</span>&nbsp;&nbsp;&nbsp;⭐️⭐️⭐️   </h3>
      <ul>
        <p>{review.content}</p>
        <h3>작성일시{review.created_at} 태그 </h3>
      </ul>
    </Wrapper>
  );
};

export default Review;
