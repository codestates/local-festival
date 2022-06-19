import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
const Wrapper = styled.div`
  background-color: #2f76d3;
  background-color: white;
  margin-top: 2rem;
  height: 4rem;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem  gray;
  border-radius: 1.8rem;
  & > * {
    margin: 1rem 0;
  }
  & > input {
    width: 80%;
    height: 60%;
    border: none;
    font-size: large;
    font-weight: bold;
    border-radius: 0.2rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
    background: none;
    
  }
  & > button {
    /* width: 10%;
    height: 60%; */
    border: none;
    background: none;
    font-size: large;
    font-weight: bold;
    border-radius: 0.2rem;
      & > * {
        color: #2f76d3;
      }

    
  }
    &  svg:active {
  /* box-shadow: 1px 1px 0 rgb(0,0,0,0.5); */
  background: none;
  color: #05c299;

  /* position: relative;
  top:3px; */
  transition: 0.05s;
    }
  
`;

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const onClickSearch = () => {
    onSearch(searchText);
  };
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  const onKeyPress = (e) => {

    if(e.key === 'Enter') {
   
      onSearch(searchText);
   
    }
   
   }
  return (
    <Wrapper>
      <input onKeyPress={onKeyPress} onChange={onChangeHandler} placeholder="축제를 검색해주세요!" />
      <button onClick={onClickSearch}><IoSearchCircleSharp  size={50}/></button>
    </Wrapper>
  );
};

export default Search;
