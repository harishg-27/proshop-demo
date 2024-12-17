import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';


const Rating = ({ value, text}) => {
  return (
    <>
       <div>
            <span>
                {value >= 1 ? <FaStar style={{color:"yellow"}}/> : 
                    value >= 0.5 ? <FaStarHalfAlt style={{color:"yellow"}}/> : <FaRegStar style={{color:"yellow"}}/> }
            </span>
            <span>
                {value >= 2 ? <FaStar style={{color:"yellow"}}/> : value >= 1.5 ? <FaStarHalfAlt style={{color:"yellow"}}/> : <FaRegStar style={{color:"yellow"}}/> }
            </span>
            <span>
                {value >= 3 ? <FaStar style={{color:"yellow"}}/> : value >= 2.5 ? <FaStarHalfAlt style={{color:"yellow"}}/> : <FaRegStar style={{color:"yellow"}}/> }
            </span>
            <span>
                {value >= 4 ? <FaStar style={{color:"yellow"}}/> : value >= 3.5 ? <FaStarHalfAlt style={{color:"yellow"}}/> : <FaRegStar style={{color:"yellow"}}/> }
            </span>
            <span>
                {value >= 5 ? <FaStar style={{color:"yellow"}}/> : value >= 4.5 ? <FaStarHalfAlt style={{color:"yellow"}}/> : <FaRegStar style={{color:"yellow"}}/> }
            </span>
            <span>
                {text ? text : null}
            </span>
        </div>
    </>
  )
}

export default Rating
