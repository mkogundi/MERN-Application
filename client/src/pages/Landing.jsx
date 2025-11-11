import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg';
import '../styles/Landing.css';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <img 
        src={bannerImage}
        alt="The Movies Hub Banner" 
        className="landing-banner"
      />
      <div className="landing-gradient-overlay"></div>
      <div className="landing-overlay">
        <h1 className="app-title">🎬 The Movies Hub</h1>
        <p className="app-subtitle">Cinematic Odyssey : The magic of movies</p>
        <button 
          className="browse-btn-landing"
          onClick={() => navigate('/movies')}
        >
          Browse Movies
        </button>
      </div>
    </div>
  );
}
