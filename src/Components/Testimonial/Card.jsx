import React, { useState } from 'react'
import './Testimonial.css'
import { GrNext } from "react-icons/gr";
import { GoX } from "react-icons/go";

const Card = (props) => {
  const [ lern, setLearn] = useState(false);

  return (
    <div className='card'>
        <div className="card-body">
          <div className="card-content">
           <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.position}</p>
            <h3 onClick={()=> setLearn(!lern)}>Learn more <GrNext className='next'/></h3>
          </div>
        </div>
        {
          lern && <div className="card-learn-more">
          <div className="cross-icon"><GoX onClick={ ()=>setLearn(!lern)}/></div>
          <p>{props.description}</p>
           <h5>{props.name}</h5>
        </div>
        }
    </div>
  )
}

export default Card