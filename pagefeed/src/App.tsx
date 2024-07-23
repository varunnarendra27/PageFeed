import React, { useState, useEffect } from 'react';
import './App.css';
import Pet from './Pet';
import HungerLevel from './hungerlevel';

const App: React.FC = () => {
  const [hungerLevel, setHungerLevel] = useState<number>(100);
  const [pagesRead, setPagesRead] = useState<number>(0);
  const [isFed, setIsFed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0); // 0: Home, 1: Feed, 2: Stats, 3: Settings

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

    // Trigger the feeding animation
    setIsFed(true);
    setTimeout(() => setIsFed(false), 1000); // reset the animation after it completes
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <HungerLevel hungerLevel={hungerLevel} />
            <Pet hungerLevel={hungerLevel} isFed={isFed} />
          </>
        );
      case 1:
        return (
          <>
            <input
              type="number"
              value={pagesRead}
              onChange={handleInputChange}
              placeholder="Enter pages read"
            />
            <button onClick={feedPet}>Feed Pet</button>
          </>
        );
      case 2:
        return <div>Statistics Content</div>;
      case 3:
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="content">
        {renderContent()}
      </div>
      <div className="nav-bar">
        <div className={`nav-item ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
          Home
        </div>
        <div className={`nav-item ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
          Feed
        </div>
        <div className={`nav-item ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
          Stats
        </div>
        <div className={`nav-item ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
          Settings
        </div>
      </div>
    </div>
  );
};

export default App;