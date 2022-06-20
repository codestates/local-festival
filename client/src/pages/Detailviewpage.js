import React, { useState, useEffect } from "react";
import DescTab from "../components/DescTab";
import Moveloginpick from "../components/Moveloginpick";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ReviewTab from "../components/ReviewTab";
import HeartButton from"../components/HeartButton"
import onErrorImage from "../noimage.png"
import ReviewWrite from "../components/ReviewWrite";

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 70rem;
  justify-content: space-evenly;
  border-radius: 1rem;
  /* background-color: #f9fafa; */
  margin-top: 1rem;
  
`;


//70 W
  //5 T
  //97% T & D

const ImageAndPickbtn = styled.div`
  margin: 8rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 37%; 
  height: 30rem;
  /* border: 1px solid black; */
  background-color:white;
  box-shadow: 0.1rem 0.1rem 0.5rem gray;

  border-radius: 1rem;
  & > * {
    
  }
  & > img {
    width: 100%;
    height: 80%;
    border-radius: 1rem;
    padding: 0.5rem;
    /* border: 1.5px solid #1564a9; */
    position:relative;
   
    
  }

  & > :nth-child(2){
    width: 3rem;
    height: 3rem;
    border: none;
    position: relative;
    left: 0.5rem;
  }

  & > div {
    width: 100%;
    position: relative;
    left: 1rem;
  }

  
`;
const TabAndDesc = styled.div`
  width: 80%;
  height: 97%;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 1rem;
  /* padding: 0 1rem; */
  margin: 1rem;
  margin-left : 3rem;
  box-shadow: 0.1rem 0.1rem 0.3rem gray;
`;

const Tab = styled.div`
  width: 100%;
  height: 5rem;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  border-radius: 0.5rem 0.5rem 0 0 ;
  background-color: aliceblue;
  box-shadow: 0 0 2px 0 gray;

  & > div {
    width: 100%;
  }

  /* margin-bottom: 7rem; */

  .submenu {
    width: 100%;
    height: 100%;
    /* padding: 15px 10px; */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .focused {
    background-color: #1564a9;

    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Detailviewpage = ({pickItems, togglePick, authState}) => {
  
  const [currentTab, setCurrentTab] = useState(0);
  const [like, setLike] = useState(false)

  const { state } = useLocation();

  const { image, title, id } = state;
  const onErrorImg = (e) => {
    e.target.src = onErrorImage
  }
  
  const tabArr = [
    { name: "상세정보", content: <DescTab festivalInfo={state} /> },
    { name: "리뷰", content: <ReviewTab authState={authState} festivalInfo={state} /> },
  ];

  useEffect(()=>{
    const isPicked = pickItems.some(ele => ele.festival_id === id)
    setLike(isPicked)
  })
  const toggleLike =  (event) => {
    // event.stopPropagation();
    setLike(!like)
  }
  const onClickPick = (event, id) => {
    event.stopPropagation();
    console.log("pick_id!!!!!!!!!!", id);
    togglePick(id);
    toggleLike()
  };

  return (
    <Wrapper>
      <ImageAndPickbtn>
        <img src={image} 
        alt={`${title} : 이미지가 존재하지 않습니다.`}
        onError={onErrorImg}
        ></img>

        {authState.loginStatus ? <HeartButton  like={like}
            onClick={(event) => {
              onClickPick(event, id);
          
            }}
         / > :  null}
       
        
       
            {/* <ReviewWrite authState={authState}
      //   festival_id={festival_id}
      //  updateReviewList={updateReviewList}
       
         />  */}
      
     
      </ImageAndPickbtn>
      <TabAndDesc>
        <Tab>
          {tabArr.map((ele, index) => {
            return (
              <div
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => setCurrentTab(index)}
              >
                {ele.name}
              </div>
            );
          })}
        </Tab>
        {tabArr[currentTab].content}
      </TabAndDesc>
    </Wrapper>
  );
};

export default Detailviewpage;
