import React from "react";
import Festival from "./Festival";

const FestivalList = () => {
  return (
    <div className="FestivalList">
      <h1>FestivalList컴포넌트입니다</h1>
      <div className="list-flex">
        <Festival />
        <Festival />
        <Festival />
        <Festival />
      </div>
    </div>
  );
};

export default FestivalList;
