import React, { useState, useEffect } from 'react';
import './Home.css';
import { GrFormNextLink } from "react-icons/gr";
import michal from '../../assets/MichalJordan.png';
import lebron from '../../assets/lebron.png';
import kobe from '../../assets/kobe.png';
import kevin from '../../assets/kevin.png';
import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';
import player3 from '../../assets/player3.png';
import Player from './Player';

const players = [
  {
    name: "Michael Jordan",
    team: "Chicago Bulls",
    position: "Point Guard",
    image: michal
  },
  {
    name: "LeBron James",
    team: "Los Angeles Lakers",
    position: "Small Forward",
    image: lebron
  },
  {
    name: "Kobe Bryant",
    team: "Los Angeles Lakers",
    position: "Shooting Guard",
    image: kobe
  },
  {
    name: "Kevin Durant",
    team: "Brooklyn Nets",
    position: "Power Forward",
    image: kevin
  },
  {
    name: "Maya Moore",
    team: "Minnesota Lynx",
    position: "Small Forward",
    image : player1
  },{
    name: "Sue Bird",
    team: "Seattle Storm",
    position: "Point Guard",
    image : player2
  },
  {
    name: "Diana Taurasi",
    team: "Phoenix Mercury",
    position: "Shooting Guard",
    image : player3
  }
];

const Home = () => {
  const [startSlide, setStartSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getInitialSlidesToShow());
    }

    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getInitialSlidesToShow() {
    if (window.innerWidth < 667) {
      return 1;
    } else if (window.innerWidth < 900) {
      return 2;
    } else {
      return 3;
    }
  }

  const nextSlide = () => {
    setStartSlide((prevStartSlide) => (prevStartSlide + 1) % players.length);
  };

  const prevSlide = () => {
    setStartSlide((prevStartSlide) => (prevStartSlide - 1 + players.length) % players.length);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
      visibleSlides.push(players[(startSlide + i) % players.length]);
    }
    return visibleSlides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className='home'>
      <div className="home-width-cont">
        <div className="home-height">
          <div className='home-content'>
            <h1>
              Your ultimate source for <a className='home-link' href="#">Basketball</a>
              <span> news and updates</span>
            </h1>
          </div>
          <div className='home-para'>
            <p>Welcome to BasketBall Academy, your one-stop destination for all things Basketball!</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className='btn home-btn'>Join Us Now <GrFormNextLink /></button>
          </div>
        </div>

        <div className='home-scroll'>
          {visibleSlides.map((d, index) => (
            <Player
              key={startSlide + index}
              name={d.name}
              team={d.team}
              position={d.position}
              image={d.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
