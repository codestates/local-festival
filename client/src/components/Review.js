import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  height:10rem;
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

const Header = styled.div`
display: flex;
justify-content: space-between;
`

const Button = styled.button`
`
const Modal = styled.div`
background-color: none;
opacity: 1;
height: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0.5rem;
  margin: 0.4rem;
  padding: 0.3rem;

`
const Review = ({review, authState , deleteReview}) => {
 const[deleteClicked, setDeleteClicked] = useState(false)

 const modalHandler = ()=>{
  setDeleteClicked(!deleteClicked)
 }

const onClickDelete = (id)=>{
  // setDeleteClicked(!deleteClicked)
  deleteReview(id)
}


  return (
    
    <Wrapper>
      {deleteClicked ?  <Modal>리뷰를 정말 삭제하시겠습니까?
        <div><button onClick={modalHandler}>취소하기</button><button onClick={()=>onClickDelete(review.id)}>삭제하기</button></div>
      </Modal>: <><Header> <span> <span style={{color:"#ec5b5b", fontStyle:"italic"}}>{review.nickname}</span>&nbsp;&nbsp;&nbsp;⭐️⭐️⭐️</span> {review.nickname === authState.nickname &&  <span><Button onClick={modalHandler}>삭제</Button></span>} </Header>
      <ul>
        <p>{review.content}</p>
        <li>작성일시{review.createdAt} </li>
      </ul></>}
     
    </Wrapper>
    
     
  );
};

export default Review;
