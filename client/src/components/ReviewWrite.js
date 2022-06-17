import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Rating from "./Rating";

const Wrapper = styled.div`
  width: 96%;
  height: 14rem;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  overflow-y: auto;
  padding: 0.5rem;
  margin: 0.5rem;
    background-color: #dcdcdc;
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

background-color: #ee7178;
color: inherit;
	border: none;
  height: 2.5rem;
  border-radius: 0.3rem;
  font-weight: bold;
	padding: 0.5rem;

	cursor: pointer;
	outline: inherit;
`
const ReviewWrite = ({festival_id}) => {

  const [content, setContent] = useState("")
  const [rating, setRating] = useState(null)

  const handleContent = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  }

  const handleRating = (rating)=>{
    console.log('상끌 rating', rating);
    setRating(rating)
  }

  const handleSubmit = () => {
      axios.post('http://localhost:4001/review', {data : {content : content, rating:Number(rating), festival_id:festival_id}, headers: { accessToken: 'token'}})
      .then(response => {
       alert(response.data.message);
      //#상태변화 시켜주는 로직 다시 수정하기
      })
      .catch(err => {
        console.log(err);
      })
   
  }
  return (
    <Wrapper>
      <h2>리뷰</h2>
     
        <Textarea onChange={handleContent} placeholder="후기를 남겨주세요."></Textarea>
        <Controllers>
          <Rating handleRating={handleRating} />
         <Button onClick={handleSubmit}>리뷰올리기</Button>
        </Controllers>
     
    </Wrapper>
  );
};

export default ReviewWrite;
