import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 13em;
  height: 15em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  /* background-color: #ff8a3d; */
  display: flex;
  flex-direction: column;
  box-shadow: inset;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    & > div,
    border {
      background-color: coral;
    }
  }

  /* &:active {
    box-shadow: 0px 0px 10px 5px coral;
    transform: translateY(-1em);
  } */

  & > img {
    object-fit: cover;
    width: 100%;
    height: 10em;
    border-radius: 3.5px 3.5px 0 0;
  }
`;

const Description = styled.div`
  text-align: start;
  height: 5em;
  padding: 0.2em;
  border-top: 0.3em solid #ff8a3d;
  color: white;
  background-color: #ff8a3d;
  border-radius: 0 0 4px 4px;
`;

const Festival = ({ festival, addPick }) => {
  let navigate = useNavigate();

  const onClickMoveDVP = () => {
    navigate("/Detailviewpage", { state: festival });
  };

  const onClickPick = (event, id) => {
    event.stopPropagation();
    console.log("pick_id!!!!!!!!!!", id);
    addPick(id);
  };

  return (
    <Wrapper key={festival.id} onClick={onClickMoveDVP}>
      <img src={festival.image} alt="이미지 없을 때!" />

      <Description>
        <div>
          <b>{festival.title}</b>
        </div>
        <div>
          {festival.start_date}~{festival.end_date}
        </div>
        <button
          onClick={(e) => {
            onClickPick(e, festival.id);
          }}
        >
          찜
        </button>
      </Description>
    </Wrapper>
  );
};

export default Festival;
