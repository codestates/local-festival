import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeartButton from "./HeartButton";
import onErrorImage from "../noimage.png"
const Wrapper = styled.div`
  width: 22%;
  height: 25em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  /* background-color: #ff8a3d; */
  display: flex;
  flex-direction: column;
  box-shadow: inset;
  transition: transform 0.3s ease-out;
  /* z-index: 999000; */
  
  

  &:hover {
    transform: scale(1.1);
    & > div:nth-child(2) {
      background-color: #2f76d3;
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
  padding: 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: 0.3em solid; */
  color: black;
  background-color: #f2eeee;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 2px 2px gray;
  & > div {
    width: 80%;
    text-align: center;
  }
`;

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
    console.log('hey');
  })

  const onClickMoveDVP = () => {
    navigate(`/Detailviewpage/festival_id/${id}`, { state: item });
  };
  return (
    <Wrapper onClick={onClickMoveDVP}>
        <img src={image} alt={title}  onError={onErrorImg} />
      <Description>
        
        <div><b>{title}</b></div>
        <div>{start_date}~{end_date}</div>
        
     
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
