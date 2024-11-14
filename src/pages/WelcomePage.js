import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <button onClick={() => navigate('/dashboard')} className="welcome-button">Go to Dashboard</button>
    </div>
  );
}

export default WelcomePage;
