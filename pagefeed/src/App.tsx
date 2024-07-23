import React, { useState, useEffect } from 'react';
import './App.css';
import Pet from './Pet';
import HungerLevel from './hungerlevel';
import logo from './assets/logo.png'; // Import the logo image

const App: React.FC = () => {
  const [hungerLevel, setHungerLevel] = useState<number>(100);
  const [pagesRead, setPagesRead] = useState<number>(0);
  const [isFed, setIsFed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0); // 0: Home, 1: Stats, 2: Settings
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true); // Initial loading state

  useEffect(() => {
    if (!isInitialLoading) {
      const interval = setInterval(() => {
        setHungerLevel(prev => Math.max(prev - 1, 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isInitialLoading]);

  // Simulate the initial loading state duration
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoading(false);
    }, 5000); // 5 seconds duration

    return () => clearTimeout(timeout);
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
            <div className="header">
              <HungerLevel hungerLevel={hungerLevel} />
            </div>
            <Pet hungerLevel={hungerLevel} isFed={isFed} />
            <div className="feed-container">
              <input
                type="number"
                value={pagesRead}
                onChange={handleInputChange}
                placeholder="Enter pages read"
                className="feed-input"
              />
              <button onClick={feedPet} className="feed-button">Feed Pet</button>
            </div>
          </>
        );
      case 1:
        return <div>Statistics Content</div>;
      case 2:
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {isInitialLoading ? (
        <div className="initial-logo-container">
          <img src={logo} alt="Logo" className="initial-logo" />
        </div>
      ) : (
        <div className="main-content">
          <div className="nav-bar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="nav-items-container">
              <div className={`nav-item ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                Home
              </div>
              <div className={`nav-item ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                Stats
              </div>
              <div className={`nav-item ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                Settings
              </div>
            </div>
          </div>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;