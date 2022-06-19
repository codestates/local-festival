import React, { useRef } from "react";
import Review from "./Review";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 97%;
  height: 43rem;
  border-radius: 0.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column-reverse;
 
  /* flex-wrap:nowrap; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
 
`;

const ReviewList = ({listOfReviews, authState, deleteReview}) => {
  const that = useRef()
// console.log(that.current.scrollTo({
//   top:0,
//   behavior:'smooth'}
// ));
//* listOfReviews
// {content: "'소록소록 로운 비나리 소록소록 다솜.',", createdAt: "20…}
// id :1
// festival_id : 3
// user_id : "bbb1234"
// nickname :"유동혁"
// content : "'소록소록 로운 비나리 소록소록 다솜.',"
// rating:4
// createdAt: "2022-06-14T01:44:00.000Z"
// updatedAt: "2022-06-14T01:44:00.000Z"



  return (
    <Wrapper ref={that} >
      
  
    {!listOfReviews.length ? <>리뷰가 등록되어있지 않습니다.</> : <>
    
    {listOfReviews.map((review) =>< Review key={review.id} deleteReview={deleteReview} authState={authState} review={review}/> )}
    </>}
     
    
    </Wrapper>
  );
};

export default ReviewList;
