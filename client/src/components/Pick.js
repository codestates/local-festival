import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeartButton from "./HeartButton";
import onErrorImage from "../noimage.png"
import moment from "moment";
const Wrapper = styled.div`
    width: 22%;
  height: 23em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0.1rem 0.1rem 0.2rem  gray; */
  transition: transform 0.3s ease-out;
  /* font-family: "EarlyFontDiary"; */
  

  &:hover {
    .title>b {
      color:#6cf7a6; 
    }
    transform: scale(1.1);
    & > div:nth-child(2) {
      background-color: #1a6cb4;
      color: white;
    }

    svg {
      color: white;
    }
    
    
    
  }


  & > img {
    object-fit: fill;
    width: 100%;
    height: 70%;
    border-radius: 3.5px 3.5px 0 0;
    box-shadow: 1px 0  2px gray; 
  }
`;

const Description = styled.div`
  text-align: start;
  height: 7rem;
  padding: 1rem 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  color: black;
  box-shadow: 1px 1.5px 2px gray;
  background-color: #f2eeee;
  border-radius: 0 0 4px 4px;
  & > div {
    width: 80%;
    text-align: start;
    padding-left:0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    & > b{
      color: #073c6a;
      font-size :large;
     
    }
  }
`
const HeartDiv = styled.div`
display: flex;
justify-content: flex-end;
& > img {
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  right: 0.8rem;
  bottom: 2.2rem;
}
`

const Pick = ({ item, togglePick, pickItems }) => {
  const [like, setLike] = useState(false)

  let navigate = useNavigate();
  const { id, title, image, start_date, end_date } = item;
  const onClickRemove = (event,id) => {
    event.stopPropagation();
    togglePick(id);

  };
  const onErrorImg = (e) => {
    e.target.src = onErrorImage
  }
 
  
  useEffect(()=>{
    const isPicked = pickItems.some(ele => ele.festival_id === id)
    setLike(isPicked)
   
  })

  const onClickMoveDVP = () => {
    navigate(`/Detailviewpage/festival_id/${id}`, { state: item });
  };
  return (
    <Wrapper onClick={onClickMoveDVP}>
        <img src={image} alt={title}  onError={onErrorImg} />
      <Description>
       <div className="title">
          <b>{title}</b>
        </div>
        <div>
          <div >시작일:{moment(start_date, "YYYY.MM.DD").format("YYYY년 MM월 DD일")}</div>
          <div >종료일:{moment(end_date, "YYYY.MM.DD").format("YYYY년 MM월 DD일")}</div>
        </div>
     
        </Description>
        <HeartDiv>
        <HeartButton like={like}
            onClick={(event) => {
              onClickRemove(event, id);
          
            }}
          >
          
          </HeartButton>
        </HeartDiv>
    </Wrapper>
  );
};

export default Pick;
