import React, { useState, useEffect } from 'react';
import './Rating.css';
import icon from '../../assets/logoIcon.png';
import RatingSlider from './RatingSlider';

const data = [
  {
    id: 1,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est eaque vitae impedit laudantium suscipit. Quos tenetur atque dolorem.",
    name: "Aman Yadav",
    position: "Player",
    rating : 4
  },
  {
    id: 2,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est eaque vitae impedit laudantium suscipit. Quos tenetur atque dolorem",
    name: "Niranjan Goit",
    position: "Student",
    rating : 5
  },
  {
    id: 3,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est eaque vitae impedit laudantium suscipit. Quos tenetur atque dolorem",
    name: "Vansh Kumar",
    position: "Student",
    rating : 4
  },
  {
    id: 4,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est lorem  sflas getfsaf eroj afdsgfg ero adf  sret asf er df e a",
    name: "Dipak Niruala",
    position: "Student",
    rating : 3
  },
  {
    id: 5,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est lorem  sflas getfsaf eroj afdsgfg ero adf  sret asf er df e a",
    name: "Rajan Dahal",
    position: "Player",
    rating : 5
  },
  {
    id: 6,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corporis est lorem  sflas getfsaf eroj afdsgfg ero adf  sret asf er df e a",
    name: "Sudip Bhattrai",
    position: "Student",
    rating : 4
  }
];

const Rating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slidesToShow = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 600) {
      return 2;
    } else {
      return 1;
    }
  };

  const visibleSlides = slidesToShow();

  return (
    <div className='rating'>
      <div className="rating-title">
        <h2>What Clients Tell About <span>BasketBall Academy </span></h2>
        <img src={icon} alt="Bardan World" />
      </div>
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button prev">{"<"}</button>
        <div className="carousel">
          {data.slice(currentIndex, currentIndex + visibleSlides).map((item, index) => (
            <RatingSlider
              key={item.id}
              name={item.name}
              description={item.description}
              position={item.position}
              rating = {item.rating}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-button next">{">"}</button>
      </div>
    </div>
  );
};

export default Rating;
