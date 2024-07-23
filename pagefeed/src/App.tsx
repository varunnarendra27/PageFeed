import React, { useState, useEffect } from 'react';
import './App.css';
import Pet from './Pet';
import HungerLevel from './hungerlevel';

const App: React.FC = () => {
  const [hungerLevel, setHungerLevel] = useState<number>(100);
  const [pagesRead, setPagesRead] = useState<number>(0);
  const [isFed, setIsFed] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHungerLevel(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagesRead(Number(event.target.value));
  };

  const feedPet = () => {
    let foodAmount = 0;

    if (pagesRead >= 50) {
      foodAmount = 50;
    } else if (pagesRead >= 30) {
      foodAmount = 30;
    } else if (pagesRead >= 10) {
      foodAmount = 10;
    }

    setHungerLevel(prev => Math.min(prev + foodAmount, 100));
    setPagesRead(0); // reset the pages read after feeding

    // Trigger the animation
    setIsFed(true);
    setTimeout(() => setIsFed(false), 1000); // reset the animation after it completes
  };

  return (
    <div className="App">
      <HungerLevel hungerLevel={hungerLevel} />
      <Pet hungerLevel={hungerLevel} isFed={isFed} />
      <input
        type="number"
        value={pagesRead}
        onChange={handleInputChange}
        placeholder="Enter pages read"
      />
      <button onClick={feedPet}>Feed Pet</button>
    </div>
  );
};

export default App;