import React, {useState} from 'react';
import { AiFillStar } from "react-icons/ai";
import styled from 'styled-components';

const Wrapper = styled.div`
width: 10rem;
height: 2.5rem;
/* margin: 1rem; */
padding: 0.5rem;
border-radius: 0.5rem;
background-color: #1161c9;

& * {
  width: 20%;
  height: 100%;
}
 & input[type="radio"]{
display: none;
 }

 & .star {
  cursor: pointer;
  transition: color 200ms;
 }

`
  
const Rating = ({handleRating, howmany}) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  //console.log(howmany);
  const onClickRating = (rating)=>{
    setRating(rating)
    console.log(rating);
    handleRating(rating)
  }
  return (
    <Wrapper>
      {[1,2,3,4,5].map(ele => {
        const ratingValue = ele

        return (
          <label key={ele}>
            <input 
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={(e)=>onClickRating(e.target.value)}
            
            />
            <AiFillStar
             className="star" 
             color={ratingValue<= (hover ||rating)? "#ffdd00" :"#c6c6c6" } 
             size={100}
             onMouseEnter={()=> setHover(ratingValue)}
             onMouseLeave={()=> setHover(null)}
             />
          </label>
          )
        
      } )}
    </Wrapper>
  );
};

export default Rating;