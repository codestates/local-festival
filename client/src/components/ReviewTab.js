import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewWrite from "./ReviewWrite";
import axios from "axios";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #d8e4f0c8; */
  overflow: hidden; // 안해주면 줄어들음
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & > * {
    margin: 0.5rem;
  }
`;

const ReviewTab = ({festivalInfo, authState}) => {
const festival_id = festivalInfo.id

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

  useEffect(()=>{
    //# 특정 축제에 대한 리뷰글들을 불러온다. 
    //* api 수정 특정 글의 리뷰로 전달
    axios.get(`http://localhost:4001/review/${festival_id}`)
    .then(response => {
     // console.log(response.data);
      setListOfReviews(response.data)
      //console.log('reviewtab 클릭시 서버에서 리뷰리스트를 받아옵니다.');
    })
    .catch(err => {
     // console.log(err);
     // console.log('받아오는게 없어서 dummydata로 대체합니다.');
      setListOfReviews(dummydata)
    })
  },[])

const updateReviewList = ({user_id,nickname,content, rating, createdAt})=>{
  console.log(content, rating, nickname, "reviewTab!!");

  const nextReviewLists = [...listOfReviews, {user_id, nickname, content, rating, createdAt}]

  setListOfReviews(nextReviewLists)
}

const deleteReview = (id)=>{
  console.log(id);
  axios
  .delete(`http://localhost:4001/review/${id}`, {
    headers: {
      accesstoken: sessionStorage.getItem("accesstoken")
    }
  })
  .then((response) => {
    console.log(response.data.message);
    if(response.data.message === "ok") {
      const nextReviewLists = listOfReviews.filter(review => review.id !== id)
      setListOfReviews(nextReviewLists)
    } else {

    }
    

  })
  .catch(err => {
    console.log(err);
  });
}





  return (
    <Wrapper>
      <ReviewList authState={authState} 
      listOfReviews={listOfReviews} 
      festival_id={festival_id}
      deleteReview={deleteReview} />
      <ReviewWrite authState={authState}
        festival_id={festival_id}
       updateReviewList={updateReviewList}
       
         />
    </Wrapper>
  );
};

export default ReviewTab;
