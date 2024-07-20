import React from 'react'
import './About.css';
import about from '../../assets/about.png'
import icon from '../../assets/logoIcon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-image">
          <div className="about-image-upper"></div>
          <div className="about-img"></div>
        </div>
        <div className="about-content">
          <div className="about-content-header">
            <h2>Welcome to <span> BasketBall Academy </span> <img src={icon} alt="" /> </h2>
            
          </div>
          <p>A fusion of passion and precision Keshav goes beyond being a coach, he's court-side mentor dedicated to empowering players and fostering a deep love for the game. With a proven track record, Keshav's personalized coaching style focuses on unblocking each players and aspirations. Join Bardan's Journey</p>
          <p>Where strategic coaching leads tlo championship glory, transforming players and shaping their furures. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestiae voluptatum aliquam nisi quasi officia beatae eum quibusdam perspiciatis eligendi necessitatibus magni odit ut odio praesentium nulla, provident sapiente facere?</p>
          <button className='btn about-btn'>MORE ABOUT</button>

      </div>
    </div>
  )
}

export default About