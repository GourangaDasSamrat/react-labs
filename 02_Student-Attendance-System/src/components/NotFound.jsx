import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-animation">
          <h1 className="notfound-title">404</h1>
          <div className="notfound-circle"></div>
        </div>
        <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
        <p className="notfound-description">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="notfound-buttons">
          <button
            onClick={() => navigate('/')}
            className="notfound-button primary"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="notfound-button secondary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;