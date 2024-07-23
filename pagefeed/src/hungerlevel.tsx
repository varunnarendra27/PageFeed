import React from 'react';
import './hungerlevel.css';

interface HungerLevelProps {
    hungerLevel: number;
  }
  
  const HungerLevel: React.FC<HungerLevelProps> = ({ hungerLevel }) => {
    return (
      <div className="hunger-level">
        <div className="hunger-bar">
          <div className="hunger-bar-fill" style={{ width: `${hungerLevel}%` }}></div>
        </div>
      </div>
    );
  };
  
  export default HungerLevel;