import React from "react";
import FestivalList from "./FestivalList";
import Hashtag from "./Hashtag";
import Search from "./Search";

const Container = () => {
  return (
    <div className="Container">
      <h1>container입니다</h1>
      <Search />
      <FestivalList />
      <Hashtag />
    </div>
  );
};

export default Container;
