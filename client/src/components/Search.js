import React, { useState } from "react";

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
    <div className="Search">
      <h2>Search 컴포넌트 입니다</h2>
      <input onChange={onChangeHandler} placeholder="축제를 검색해주세요!" />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
};

export default Search;
