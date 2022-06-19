import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
const Wrapper = styled.div`
  width: 98%;
  height:10rem;
  margin-bottom: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem  gray;

  background-color: #fbfbfb;
  border-radius: 0.5rem;
  margin: 0.4rem;
  padding: 0.3rem;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
`

const Button = styled.button`

background: inherit ; 
border:none; 
box-shadow:none;
 border-radius:0;
  padding:0; 
  overflow:visible; 
  cursor:pointer
`
const Modal = styled.div`
background-color: none;
opacity: 1;
height: 10rem;
display: flex;
flex-direction: column;
justify-content: space-evenly ;
align-items: center;
border-radius: 0.5rem;
  margin: 0.4rem;
  padding: 0.3rem;

  & > h3{
   position: relative;
   top: 1.5rem;
  }
  &  button {
    background-color: aqua;
    margin: 1rem;
    width: 6rem;
    height: 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s;

    &:hover{
      transform: translateY(-0.1rem);
    }
    &:active {
      transform: translateY(0.1rem);
    }
  }

  & button:nth-child(1){
    background-color: #1564a9;
   
    color: white;
  }
  & button:nth-child(2){
    background-color:  #05c299;
    color: white;
  }
  

`



const Review = ({review, authState , deleteReview}) => {
 const[deleteClicked, setDeleteClicked] = useState(false)

 console.log(review);

 const {rating, content, createdAt} = review
 const modalHandler = ()=>{
  setDeleteClicked(!deleteClicked)
 }

const onClickDelete = (id)=>{
  // setDeleteClicked(!deleteClicked)
  deleteReview(id)
}
const ratingToStar = (rating) => {

  //#폐급하드코딩,..,.
 const starArr = [<AiFillStar color="#ffd900" />, 
 <><AiFillStar color="#ffd900"/><AiFillStar color="#ffd900" /></>,
 <><AiFillStar color="#ffd900" /><AiFillStar color="#ffd900" /><AiFillStar color="#ffd900"/></>,
 <><AiFillStar  color="#ffd900"/><AiFillStar  color="#ffd900"/><AiFillStar color="#ffd900"/><AiFillStar color="#ffd900"/></>,
 <><AiFillStar  color="#ffd900"/><AiFillStar  color="#ffd900"/><AiFillStar  color="#ffd900"/><AiFillStar color="#ffd900" /><AiFillStar color="#ffd900" /></>
 ]
  return <>
  {starArr[rating-1]}
  </> 
}

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
    
    <Wrapper>
      {deleteClicked ?  <Modal><h3>리뷰를 정말 삭제하시겠습니까?</h3>
        <div><button onClick={modalHandler}>취소하기</button>
        <button onClick={()=>onClickDelete(review.id)}>삭제하기</button>
        </div>
      </Modal>: <><Header> <span> <span style={{color:"#1564a9", fontWeight:"bold", fontStyle:"italic"}}>{review.nickname}</span>&nbsp;&nbsp;{ratingToStar(rating)}</span> {review.user_id === authState.user_id &&  <span><Button onClick={modalHandler}><FaTrashAlt size={15} /></Button></span>} </Header>
      <ul>
        <p>{content}</p>
        <li>작성일시{createdAt} </li>
      </ul></>}
     
    </Wrapper>
    
     
  );
};

export default Review;
