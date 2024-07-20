import React from 'react';
import './Program.css';

import icon from '../../assets/logoIcon.png';
import program1 from '../../assets/program1.jpg';
import program2 from '../../assets/program2.jpg';
import program3 from '../../assets/program3.jpg';
import Achievement from './Achievement';

const programs = [
  {
    id: 1,
    title: 'Acheieve Excellence with Proven Methods.',
    description: 'Our team of passionate basekball enthsiasts...',
    image: program1
  },
  {
    id: 2,
    title: 'Precision Coaching for Excellence',
    description: 'Our team of passionate basekball enthsiasts...',
    image: program2
  },
  {
    id: 3,
    title: 'Take the First Step with Fitness Assesmsment',
    description: 'Our team of passionate basekball enthsiasts...',
    image: program3
  }
];

const Program = () => {
  return (
    <div className='program'>
      <div className="program-left">
        <h2>Kickstart Your <span>Basketball</span> <img src={icon} alt="" /></h2>
        <p>A fusion of passion and precision. Keshav goes beyond being a coach, he's a court-side mentor dedicated to empowering players and fostering a deep love for the game</p>
        <p>Keshav Yadav's journey, where strategic coaching leads to championship glory transforming players and shaping their futures.</p>
        <button className="btn program-btn">JOIN NOW</button>
      </div>
      <div className="program-right">
        {programs.map((item) => (
          <Achievement
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Program;
