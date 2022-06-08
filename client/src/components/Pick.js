import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 3px solid blue; */
  display: flex;
  justify-content: space-between;
  height: 20%;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;

  & > div {
    border: 1px solid black;
    height: 100%;
    width: 40%;
  }
  & > div > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Pick = ({ item, removePick }) => {
  let navigate = useNavigate();
  const { id, title, image, start_date, end_date } = item;
  const onClickRemove = (id) => {
    removePick(id);
  };
  const onClickMoveDVP = () => {
    navigate("/Detailviewpage", { state: item });
  };
  return (
    <Wrapper>
      <Info onClick={onClickMoveDVP}>
        <div>picknumber & pickdate</div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>{title}</div>
        <div>
          {start_date}~{end_date}
        </div>
      </Info>
      <button
        onClick={() => {
          onClickRemove(id);
        }}
        className="pick-x"
      >
        찜해제
      </button>
    </Wrapper>
  );
};

export default Pick;
