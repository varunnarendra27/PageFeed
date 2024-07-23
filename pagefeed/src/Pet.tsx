import React from 'react';
import './pet.css';

interface PetProps {
    hungerLevel: number;
    isFed: boolean;
  }
  
  const Pet: React.FC<PetProps> = ({ hungerLevel, isFed }) => {
    return (
      <div className={`pet-container ${isFed ? 'jump' : ''}`}>
        <div className="pet">
          🐶
        </div>
        <div className="hunger-level">
          Hunger Level: {hungerLevel}
        </div>
      </div>
    );
  };
  
  export default Pet;