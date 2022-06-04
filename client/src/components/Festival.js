import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Festival = ({ festival }) => {
  // 클릭을 했을 때
  //   상세페이지 나온다
  // 클릭하지 않았을 때
  //   그냥 요약정보?
  // const [isClicked, setIsClicked] = useState(false);

  // const onClickhandler = () => {
  //   isClicked ? setIsClicked(false) : setIsClicked(true);
  // };
  let navigate = useNavigate();

  const onClickMoveDVP = () => {
    navigate("/Detailviewpage", { state: festival });
  };

  return (
    <div onClick={onClickMoveDVP} className="Festival">
      <img src={festival.image} alt="이미지 없을 때!" />

      <div className="Fe-description">
        <div>
          <b>{festival.title}</b>
        </div>
        <div>
          {festival.start_date}~{festival.end_date}
        </div>
      </div>
    </div>
  );
};

export default Festival;
