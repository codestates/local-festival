import React from "react";
import FestivalList from "./FestivalList";
import Footer from "./Footer";
import Hashtag from "./Hashtag";
import Search from "./Search";

const Container = () => {
  return (
    <div className="Container">
      <h1>container입니다</h1>
      <Search />
      <FestivalList />
      <Hashtag />
      {/* <Footer /> */}
    </div>
  );
};

export default Container;
