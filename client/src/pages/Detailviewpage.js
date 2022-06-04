import React from "react";
import Tab from "../components/Tab";
import Desc from "../components/Desc";
import { useLocation } from "react-router-dom";
const Detailviewpage = () => {
  const { state } = useLocation();
  console.log(state);
  const { image } = state;
  return (
    <div className="Detailviewpage">
      <img src={image} alt="이미지"></img>
      <div className="TabAndDesc">
        <Tab />
        <Desc festivalInfo={state} />
      </div>
    </div>
  );
};

export default Detailviewpage;
