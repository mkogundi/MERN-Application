import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span onClick={() => navigate('/')}>🎬 The Movies Hub</span>
        </div>

        <div className="nav-menu">
          {user ? (
            <>
              <span className="nav-user">Welcome, {user.username}</span>
              {user.isAdmin && (
                <button className="nav-link admin-btn" onClick={() => navigate('/admin')}>
                  Admin Panel
                </button>
              )}
              <button className="nav-link logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="nav-link login-btn" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="nav-link register-btn" onClick={() => navigate('/register')}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
