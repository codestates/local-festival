import axios from "axios";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Rating from "./Rating";

const Wrapper = styled.div`
  width: 96%;
  height: 14rem;
  
  border-radius: 0.5rem;
  overflow-y: auto;
  padding: 0.5rem;
  margin: 0.5rem;
    box-shadow: 0.1rem 0.1rem 0.3rem  gray;
;
`;

const Textarea = styled.textarea`
width: 100%;
height: 6rem;
border: none;
    resize: none;
    margin-top: 1rem;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: #efefefcf;


`
const Controllers = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;
`
const Button = styled.button`
/* margin: 1rem; */

background-color: #1161c9;
color: white;
	border: none;
  height: 2.5rem;
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 1rem;
	padding: 0.5rem;

	cursor: pointer;
	outline: inherit;
  transition: transform 0.2s ease-out;
    &:hover {
      transition: transform 0.2s ease-out;
      transform: translateY(-5%);
    }
    &:active {
      color: #6cf7a6;
    }
`

const ErrorMessage = styled.div`
width: 10rem;
color: red;
position: relative;
left: 9rem;
line-height: 2.4;
font-size: large;
font-weight: bold;

`
const ReviewWrite = ({updateReviewList,festival_id, authState}) => {

  const [content, setContent] = useState("")
  const [rating, setRating] = useState(null)

  const errorMessage = useRef()

  const handleContent = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  }

  const handleRating = (rating)=>{
    console.log('상끌 rating', rating);
    setRating(rating)
  }

  const handleSubmit = () => {

      if(!rating) {
        console.log(errorMessage.current);
        errorMessage.current.textContent = "별점을 입력해 주세요"
      } else if(content.length===0){
        console.log(errorMessage.current);
                errorMessage.current.textContent = "내용을 입력해 주세요"
      } else {
        axios.post('http://localhost:4001/review', {data : {content : content, rating:Number(rating), festival_id:festival_id}},{headers: {
          accesstoken: sessionStorage.getItem("accesstoken"),
        }})
        .then(response => {
        
        //#작성한 리뷰 ReviewList에 올려지도록 하기 
        updateReviewList({user_id : authState.user_id, nickname: authState.nickname, content : content, rating : rating, createdAt:(new Date()).toLocaleString()})
        setContent("")
        setRating(null)
        // window.scrollTo({
        //   top: 0, 
        //   behavior: 'smooth'
        //   /* you can also use 'auto' behaviour
        //      in place of 'smooth' */
        // });
        })
        .catch(err => {
          console.log(err);
        })
      }
     
   
  }
  return (
    <Wrapper>
      <h2>리뷰</h2>
     
        <Textarea value={content} onChange={handleContent} placeholder="후기를 남겨주세요."></Textarea>
        <Controllers>
          <Rating howmany={rating} handleRating={handleRating} />
          <ErrorMessage ref={errorMessage} />
         <Button onClick={handleSubmit}>올리기</Button>
        </Controllers>
     
    </Wrapper>
  );
};


export default ReviewWrite;
