import React from 'react';
import './pet.css';
import fullImage from './assets/full.png';
import beingFedImage from './assets/being-fed.png';
import hungryImage from './assets/hungry.png';
import bellyEmptyImage from './assets/belly-empty.png';

interface PetProps {
  hungerLevel: number;
  isFed: boolean;
}

const Pet: React.FC<PetProps> = ({ hungerLevel, isFed }) => {
  let petImage;

  if (isFed) {
    petImage = beingFedImage;
  } else if (hungerLevel > 60) {
    petImage = fullImage;
  } else if (hungerLevel > 15) {
    petImage = hungryImage;
  } else {
    petImage = bellyEmptyImage;
  }

  return (
    <div className={`pet-container ${isFed ? 'jump' : ''}`}>
      <div className="pet alive-animation">
        <img src={petImage} alt="Pet" className="pet-image" />
      </div>
      <div className="hunger-level">
        Hunger Level: {hungerLevel}
      </div>
    </div>
  );
};

export default Pet;