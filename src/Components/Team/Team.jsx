import React, { useState, useEffect } from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import icon from '../../assets/logoIcon.png';

const teamData = [
  {
    id: 1,
    heading: 'Training & Development',
    title: 'Achieve Excellence with Bardan World Proven Methods and Techniques',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae earum explicabo sapiente non amet adipisci dolores inventore aliquid quos et molestias repudiandae nulla, unde velit atque eaque distinctio rerum ad? Voluptatibus asperiores esse nisi dolore fugiat quis aliquam, nulla libero quidem in ea possimus odit dolores accusamus amet numquam sit.',
  },
  {
    id: 2,
    heading: 'Coaching & Fitness',
    title: 'Precision Coaching for Basketball Excellence First step to fitness Assessment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque iusto asperiores, a sapiente maiores ratione perferendis quis. Harum nemo qui adipisci cupiditate ex, temporibus numquam quaerat ducimus quae dicta! Assumenda ipsa nobis fugiat animi dolores esse quidem, odit eos laboriosam officiis suscipit qui. Impedit quidem voluptate perferendis non unde?',
  },
];

const Team = () => {
  const [firstItem, secondItem] = teamData;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='team'>
      <div className="team-title">
        <h2>Programs At <span>BasketBall Academy</span>
          <img src={icon} alt="" />
        </h2>
      </div>

      <div className="team-upper">
        <div className="team-upper-image">
          <div className="team-upper-red"></div>
          <img src={team1} alt="" />
        </div>
        <div className="team-upper-content">
          <TeamCard
            key={firstItem.id}
            heading={firstItem.heading}
            title={firstItem.title}
            description={firstItem.description}
          />
        </div>
      </div>

      {windowWidth >= 700 ? (
        <div className="team-lower">
          <div className="team-upper-content">
            <TeamCard
              key={secondItem.id}
              heading={secondItem.heading}
              title={secondItem.title}
              description={secondItem.description}
            />
          </div>
          <div className="team-lower-image">
            <div className="team-lower-red"></div>
            <img src={team2} alt="" />
          </div>
        </div>
      ) : (
        <div className="team-lower">
          <div className="team-lower-image">
            <div className="team-lower-red"></div>
            <img src={team2} alt="" />
          </div>
          <div className="team-upper-content">
            <TeamCard
              key={secondItem.id}
              heading={secondItem.heading}
              title={secondItem.title}
              description={secondItem.description}
            />
          </div>
        </div>
      )}

      <div className="btn team-btn">More Program</div>
    </div>
  );
};

export default Team;
