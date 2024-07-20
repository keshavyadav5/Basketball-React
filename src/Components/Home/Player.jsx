import React from 'react';

const Player = (props) => {
  return (
    <div className="slider-container">
      <div className="player">
        <div className='player-img'><img src={props.image} alt={props.name} /></div>
        <div className="player-content">
          <p><span>{props.name}</span></p>
          <p>{props.team}</p>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
