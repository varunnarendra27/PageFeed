import React, { useState, useEffect } from 'react';
import './App.css';
import Pet from './Pet';
import HungerLevel from './hungerlevel';

const App: React.FC = () => {
  const [hungerLevel, setHungerLevel] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHungerLevel(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const feedPet = () => {
    setHungerLevel(prev => Math.min(prev + 20, 100));
  };

  return (
    <div className="App">
      <HungerLevel hungerLevel={hungerLevel} />
      <Pet hungerLevel={hungerLevel} />
      <button onClick={feedPet}>Feed Pet</button>
    </div>
  );
};

export default App;