import React from 'react';
import './hungerlevel.css';

interface HungerLevelProps {
  hungerLevel: number;
}

const HungerLevel: React.FC<HungerLevelProps> = ({ hungerLevel }) => {
  return (
    <div className="hunger-level-bar">
      <div
        className="hunger-level-fill"
        style={{ width: `${hungerLevel}%` }}
      ></div>
    </div>
  );
};

export default HungerLevel;