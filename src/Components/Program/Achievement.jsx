import React from 'react';
import './Program.css';
import { GrFormNextLink } from "react-icons/gr";

const Achievement = ({ title, description, image }) => {
  return (
    <div className='achievement'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="">Read more <GrFormNextLink/></a>
    </div>
  );
}

export default Achievement;
