import React, { useState } from "react";
import Desc from "./Desc";
import Tab from "./Tab";

const Detailview = () => {
  const [tabStatus, setTabStatus] = useState("info");

  // selecttabmenu = () => {
  //   // 상태 바꿔주기 : info or review
  //   setTabStatus("review");
  // };

  return (
    <div className="Detailview">
      <img alt="이미지"></img>
      <Tab />
      {/* <Desc tabStatus={'info' or 'review' } /> // 탭 상태 넘어감  */}
      <Desc />
    </div>
  );
};

export default Detailview;
