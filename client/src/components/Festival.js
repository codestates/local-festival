import React, { useState } from "react";

const Festival = ({ festival }) => {
  // 클릭을 했을 때
  //   상세페이지 나온다
  // 클릭하지 않았을 때
  //   그냥 요약정보?
  const [isClicked, setIsClicked] = useState(false);

  const onClickhandler = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  return (
    <div className="Festival" onClick={onClickhandler}>
      {isClicked ? (
        <div>상세페이지로 넘어갑니다</div>
      ) : (
        <div className="festival-info">
          <div>
            <img src={festival.image} alt="이미지 없을 때!"></img>
          </div>
          <div className="festival-description">
            <h2>{festival.title}</h2>
            {festival.start_date}~{festival.end_date}
          </div>
        </div>
      )}
    </div>
  );
};

export default Festival;
