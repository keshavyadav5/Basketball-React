import React from 'react';
import './Rating.css'; 
import { FaQuoteLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const RatingSlider = ({ name, description, position ,rating}) => {
  return (
    <div className="rating-slider">
      <div className="rating-slider-quote">
        <FaQuoteLeft />
      </div>
      <div className="slider-star">
        {[...Array(rating)].map((_, index) => (
          <IoStar key={index} />
        ))}
      </div>
      <p>{description}</p>
      <h3>{name}</h3>
      <h6>{position}</h6>
    </div>
  );
};

export default RatingSlider;
