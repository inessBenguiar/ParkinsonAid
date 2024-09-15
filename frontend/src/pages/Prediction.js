import React, { useState } from 'react';
import Nav from '../components/Nav';
import "./Prediction.css";

function Prediction() {
  const [isConnected, setIsConnected] = useState(true);
  const userProfile = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/40',
  };

  const handleLogout = () => {
    setIsConnected(false);
  };

  // Dummy prediction data
  const predictionPercentage = 83; // Example percentage

  // Define a dynamic style for the circular progress
  const circleStyle = {
    background: `conic-gradient(#12C675 0% ${predictionPercentage}%, #e0e0e0 ${predictionPercentage}% 100%)`,
  };

  return (
    <div className="prediction-page">
      <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />
      
      {/* Main Prediction Section */}
      <div className="prediction-content">
        <h2>Prediction Results</h2>
        <p>You have uploaded 3 MRI images</p>

        {/* Circular Progress Bar */}
        <div className="circular-progress">
          <div className="circle" style={circleStyle}>
            <span>{predictionPercentage}%</span>
          </div>
        </div>

        {/* Prediction Description */}
        <p className="prediction-text">
          The MRI images indicate a high likelihood of Parkinson's disease.
        </p>

        {/* Buttons */}
        <div className="button-group">
          <button className='btn'>Save</button>
          <button className='btn'>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
