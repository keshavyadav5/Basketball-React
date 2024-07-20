import React from 'react'
import './Team.css'
import { GrNext } from "react-icons/gr";

const TeamCard = (props) => {
  return (
    <div className='teamCard'>
      <h4>{props.heading}</h4>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="teamCard-readMore">
        <h6>Read more</h6>
        <div className="teamCard-next">
          <GrNext />
        </div>
      </div>
    </div>
  )
}

export default TeamCard