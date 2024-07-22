import React from 'react';
import './pet.css';

interface PetProps {
  hungerLevel: number;
}

const Pet: React.FC<PetProps> = ({ hungerLevel }) => {
  return (
    <div className="pet-container">
      <div className="pet">
        {/* Here you can add an image or animation of the pet */}
        🐶
      </div>
      <div className="hunger-level">
        Hunger Level: {hungerLevel}
      </div>
    </div>
  );
};

export default Pet;