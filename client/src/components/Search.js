import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: yellowgreen;
  height: 10%;
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
  return (
    <Wrapper>
      <input onChange={onChangeHandler} placeholder="축제를 검색해주세요!" />
      <button onClick={onClickSearch}>검색</button>
    </Wrapper>
  );
};

export default Search;
