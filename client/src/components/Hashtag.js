import React,{useRef} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10rem;
  width: 80%;
  background-color:  #8898ad;
  color: white;
  display: flex;
  padding: 1rem;
  border-radius: 0.4rem;
  font-family: 'HS-Regular';
  font-family: 'GangwonEdu_OTFBoldA';
  flex-direction: column;
  justify-content: center;
  position: relative; 
  bottom: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem  gray;

  &  button {
    border: none;
    background: none;
	color: inherit;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  margin-left: 1rem;
  font-size: 1.5rem;
  /* font-style: italic; */

  &:hover{
    color: #00ff91;
  }
  &:visited{
    color: #00ff91;
  }
  }
`;

const Month = styled.div`
margin-bottom: 1rem;

`

const Location = styled.div`
`

const Hashtag = ({ onSearch }) => {
  const onClickMonth = (e)=>{
    
    const monthTags = e.target.parentNode.children
    console.log(monthTags);
    console.log(e.target.parentNode.parentNode.children[1].children);
    const LocationTags = e.target.parentNode.parentNode.children[1].children
    for(let i = 0 ; i < monthTags.length; i++) {
      if(monthTags[i].style.color === "red") {
        monthTags[i].style.color = "black"
        
      }
    }
    for(let i = 0 ; i < LocationTags.length; i++) {
      if(LocationTags[i].style.color === "red") {
        LocationTags[i].style.color = "black"
        
      }
    }
    // console.log(e.target.parentNode.children);
    // console.log(e.target.parentNode.children[0].style.color);
    // console.log(e.target.textContent.slice(1));
    const month = e.target.textContent.slice(1, -1)
    if(month.length === 1) {
      onSearch(`20220${month}00`)
    } else {
      onSearch(`2022${month}00`)
    }

     e.target.style.color = "red"
  }

const onClickLocation = (e) => {
  console.log(e.target.textContent.slice(1));
  const searchTag = e.target.textContent.slice(1)

  const LocationTags = e.target.parentNode.children
  const monthTags = e.target.parentNode.parentNode.children[0].children

  for(let i = 0 ; i < LocationTags.length; i++) {
    if(LocationTags[i].style.color === "red") {
      LocationTags[i].style.color = "black"
      
    }
  }
  for(let i = 0 ; i < monthTags.length; i++) {
    if(monthTags[i].style.color === "red") {
      monthTags[i].style.color = "black"
      
    }
  }
  

  onSearch(searchTag)
  e.target.style.color = "red"

}
const tagsArr = {months : Array(12).fill().map((v,i)=>i+1),
                  locations : ['서울','경기','강원','충청','전라','경상','제주']
                }

                
  return (
    <Wrapper >
      <Month >
        {tagsArr.months.map((month) => <button key={month} onClick={onClickMonth}>#{month}월</button>)}
      </Month>
      <Location>
        {tagsArr.locations.map(location => <button key={location} onClick={onClickLocation}>#{location}</button>)}       
      </Location>
    </Wrapper>
  );
};

export default Hashtag;
