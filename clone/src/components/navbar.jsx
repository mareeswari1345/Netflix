import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { RiAccountCircleFill } from 'react-icons/ri';
import '../CSS/navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    console.log('User logged out');
    console.log('')
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="app-name" onClick={() => navigate('#')}>TamilFlix</h1>
        <div className="nav-links">
          <span className="nav-link" onClick={() => navigate('/home')}>Home</span>
          <span className="nav-link" onClick={() => navigate('#')}>About Us</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search movies..." className="search-input" />
        </div>
        <FaBell className="nav-icon" />
        <div className="profile-menu">
          <RiAccountCircleFill className="profile-icon" />
          <div className="dropdown-menu">
            <span onClick={() => navigate('#')}>
              <RiAccountCircleFill className="menu-icon" /> Profile
            </span>
            <span onClick={handleLogout}>
              <IoMdLogOut className="menu-icon" /> Logout
            </span>
          </div>
        </div>
        <button>logo</button>
      </div>
    </nav>
  );
};

export default Navbar;