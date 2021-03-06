import React, {useEffect, useState} from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import onErrorImage from "../noimage.png"
import Moveloginpick from "./Moveloginpick"
import HeartButton from "./HeartButton";

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
      color: white;
    }
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



const Festival = ({ authState, festival, togglePick, pickItems }) => {
  const [like, setLike] = useState(false)
  let navigate = useNavigate();
  const onErrorImg = (e) => {
    e.target.src = onErrorImage
  }
 
  const onClickMoveDVP = (id) => {
    //console.log(id);
    navigate(`/Detailviewpage/festival_id/${id}`, { state: festival });
  };
  const toggleLike =  (event) => {
    // event.stopPropagation();
    setLike(!like)
  }

  useEffect(()=>{
    const isPicked = pickItems.some(ele => ele.festival_id === festival.id)
    setLike(isPicked)
    //console.log('hey');
  })

  const onClickPick = (event, id) => {
    event.stopPropagation();
    console.log("pick_id!!!!!!!!!!", id);
    togglePick(id);
    toggleLike()
  };
  let startDate = festival.start_date;
  let endDate = festival.end_date;

  return (
    <Wrapper key={festival.id} onClick={()=>{onClickMoveDVP(festival.id)}}>
     
      <img
        src={festival.image}
         alt={`${festival.title} : ???????????? ???????????? ????????????`}
        onError={onErrorImg}
      />

      <Description>
        <div className="title">
          <b>{festival.title}</b>
        </div>
        <div>
          <div >?????????:{moment(startDate, "YYYY.MM.DD").format("YYYY??? MM??? DD???")}</div>
          <div >?????????:{moment(endDate, "YYYY.MM.DD").format("YYYY??? MM??? DD???")}</div>
        </div>
        
        </Description>
        <HeartDiv>
          
        {authState.loginStatus ? <HeartButton like={like}
            onClick={(e) => {
              onClickPick(e, festival.id);
          
            }}
          >
          
          </HeartButton> : null}
        </HeartDiv>
        
      
        
      
      
    </Wrapper>
  );
};

export default Festival;
