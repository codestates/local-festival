import React from "react";
import Festival from "./Festival";

const FestivalList = ({ festivals }) => {
  console.log(festivals);
  if (!festivals) {
    return (
      <div>
        <h1>축제 정보가 업스무니다</h1>
      </div>
    );
  } else {
    return (
      <div className="FestivalList">
        <h1>FestivalList컴포넌트입니다</h1>

        <div className="list-flex">
          {festivals.map((festival) => (
            <Festival key={festival.id} festival={festival} />
          ))}
        </div>
      </div>
    );
  }
};

export default FestivalList;
