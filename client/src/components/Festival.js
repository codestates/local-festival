import React, { useState } from "react";

const Festival = () => {
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
        <div>
          <h1>Festival컴포넌트입니다</h1>
          <img alt="festival-image"></img>
          title period
        </div>
      )}
    </div>
  );
};

export default Festival;
