import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20%;
  height: 20em;
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
    & > div,
    border {
      /* background-color: #88b85c; */
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

const Pick = ({ item, removePick }) => {
  let navigate = useNavigate();
  const { id, title, image, start_date, end_date } = item;
  const onClickRemove = (event,id) => {
    event.stopPropagation();
    removePick(id);

  };
  const onClickMoveDVP = () => {
    navigate("/Detailviewpage", { state: item });
  };
  return (
    <Wrapper onClick={onClickMoveDVP}>
        <img src={image} alt={title} />
      <Description>
        
        <div><b>{title}</b></div>
        <div>{start_date}~{end_date}</div>
        <div>pickdate</div>
      <button
        onClick={(event) => {
          onClickRemove(event, id);
        }}
        className="pick-x"
        >
        찜해제
      </button>
        </Description>
    </Wrapper>
  );
};

export default Pick;
