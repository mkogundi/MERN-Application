import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span onClick={() => navigate('/')}>🎬 The Movies Hub</span>
        </div>

        <div className="nav-menu">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
