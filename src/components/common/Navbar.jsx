// src/components/common/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Centering Plate Rental
      </div>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;