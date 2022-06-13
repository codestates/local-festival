import React from "react";
import FestivalList from "../components/FestivalList";
import Hashtag from "../components/Hashtag";
import Search from "../components/Search";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  height: 80vh;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 1rem;
  }
`;
const Mainpage = ({ addPick, onSearch, festivalData }) => {
  //* 두번 클릭해야지 작동

  //* 서버랑 연결할 때

  // useEffect(() => {}, [condition]);

  //* 데이터 한번 받아온 후, client에서 자체적으로 필터링

  // useEffect(() => {
  //   setFestivalData(dummyData);
  // }, [condition]);

  return (
    <Wrapper>
      <Search onSearch={onSearch} />
      <FestivalList addPick={addPick} festivals={festivalData} />
      <Hashtag />
    </Wrapper>
  );
};

export default Mainpage;
