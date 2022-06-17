import React from "react";
import FestivalList from "../components/FestivalList";
import Hashtag from "../components/Hashtag";
import Search from "../components/Search";
import styled from "styled-components";
import resetImg from "../assets/reset.png"
const Wrapper = styled.div`
  width: 90%;
  height: 44rem;
  
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;

  & > * {
    /* margin: 1rem; */
  }
`;

const FilteredInfo = styled.div`
width: 90%;
height: 5rem;
align-self: flex-start;
margin-top: 1rem;
font-size: 1.7rem;
/* font-weight: bolder; */
line-height: 3;
position: relative;
left: 3.5rem;
bottom: 1rem;
display: flex;
justify-content: space-between;
font-family: 'SuseongDotum';


&>img{
  width: 3rem;
  height: 3rem;
  position: relative;
  top: 1.2rem;
  &:hover{
     transition: all 1s ease-in-out;
    transform: rotate(-45deg);

  }
  &:active   {
    
  transform: rotate(-360deg);
  transition: 0.3s;   


  }
}
`
const Mainpage = ({ authState,togglePick, onSearch, filteredData, pickItems, resetCondition }) => {
  

  return (
    <Wrapper>
      <Search onSearch={onSearch} />
      <FilteredInfo>
       <div>{!!filteredData && <span style={{color:"red"}}>{filteredData.length}</span>}개의 축제가 진행중입니다</div> <img onClick={resetCondition} src={resetImg}></img>

        </FilteredInfo>
      <FestivalList  authState={authState} togglePick={togglePick} festivals={filteredData} pickItems={pickItems} />
      <Hashtag onSearch={onSearch}/>
    </Wrapper>
  );
};

export default Mainpage;
