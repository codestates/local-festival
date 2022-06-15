import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import onErrorImage from "../noimage.png"
import Moveloginpick from "./Moveloginpick"
const Wrapper = styled.div`
  width: 22%;
  height: 20em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  /* background-color: #ff8a3d; */
  display: flex;
  flex-direction: column;
  box-shadow: inset;
  transition: transform 0.3s ease-out;
  /* font-family: "EarlyFontDiary"; */

  &:hover {
    transform: scale(1.1);
    & > div,
    border {
      background-color: #f8826b;
    }
  }

  /* &:active {
    box-shadow: 0px 0px 10px 5px coral;
    transform: translateY(-1em);
  } */

  & > img {
    object-fit: fill;
    width: 100%;
    height: 70%;
    border-radius: 3.5px 3.5px 0 0;
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
  color: white;
  background-color: #d2ad81;
  border-radius: 0 0 4px 4px;
  & > div {
    width: 80%;
    text-align: center;
  }
`;

const Festival = ({ authState, festival, addPick }) => {
  let navigate = useNavigate();
  // console.log(festival.content_id);
  const onErrorImg = (e) => {
    e.target.src = onErrorImage
  }
  // const onClickMoveDVP = () => {
  //   navigate(`/Detailviewpage/`, { state: festival });
  // };
  const onClickMoveDVP = (id) => {
    console.log(id);
    navigate(`/Detailviewpage/festival_id/${id}`, { state: festival });
  };

  const onClickPick = (event, id) => {
    event.stopPropagation();
    console.log("pick_id!!!!!!!!!!", id);
    addPick(id);
  };
  let startDate = festival.start_date;
  let endDate = festival.end_date;

  return (
    <Wrapper key={festival.id} onClick={()=>{onClickMoveDVP(festival.id)}}>
     {/* <Wrapper key={festival.id} onClick={onClickMoveDVP}> */}
      <img
        src={festival.image}
         alt={`${festival.title} : 이미지가 존재하지 않습니다`}
        onError={onErrorImg}
      />

      <Description>
        <div>
          <b>{festival.title}</b>
        </div>
        <div>
          <div >시작일:{moment(startDate, "YYYY.MM.DD").format("YYYY년/MM월/DD일")}</div>
          <div >종료일:{moment(endDate, "YYYY.MM.DD").format("YYYY년/MM월/DD일")}</div>
        </div>
        {authState.loginStatus ? <button
          onClick={(e) => {
            onClickPick(e, festival.id);
          }}
        >
          찜하기
        </button> : <Moveloginpick />}
        
     
      </Description>
    </Wrapper>
  );
};

export default Festival;
