import React, { useEffect, useState } from "react";
import Review from "./Review";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 97%;
  height: 35rem;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const ReviewList = ({festivalInfo, festival_id}) => {
const dummydata = [
  {nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
{nickname : 'mong',
content : 'aaa',
rating : '333'},
]
    const [listOfReviews, setListOfReviews] = useState([])
  //id 뽑아오기
console.log(festival_id);
  useEffect(()=>{
    //# 특정 축제에 대한 리뷰글들을 불러온다. 
    //* api 수정 특정 글의 리뷰로 전달
    axios.get(`http://localhost:4001/review/${festival_id}`)
    .then(response => {
      setListOfReviews(response.data)
    })
    .catch(err => {
      console.log(err);
      console.log('받아오는게 없어서 dummydata로 대체합니다.');
      setListOfReviews(dummydata)
    })
  },[])



  return (
    <Wrapper>
      
  
    {!listOfReviews.length ? <>리뷰가 등록되어있지 않습니다.</> : <>
    
    {listOfReviews.map((review,idx) =>< Review key={idx} review={review}/> )}
    </>}
     
    
    </Wrapper>
  );
};

export default ReviewList;
