import React, { useEffect, useState } from "react";
import Review from "./Review";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 97%;
  height: 43rem;
  border-radius: 0.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const ReviewList = ({listOfReviews, authState, deleteReview}) => {


  return (
    <Wrapper>
      
  
    {!listOfReviews.length ? <>리뷰가 등록되어있지 않습니다.</> : <>
    
    {listOfReviews.map((review) =>< Review key={review.id} deleteReview={deleteReview} authState={authState} review={review}/> )}
    </>}
     
    
    </Wrapper>
  );
};

export default ReviewList;
