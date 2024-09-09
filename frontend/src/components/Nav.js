import React, { useState } from 'react';
import './Nav.css';

const Nav = ({ userProfile, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="#">
          <span className="logo-green">PARKINSON</span> <span className="logo-black">AID</span>
        </a>
      </div>
      <ul className="nav-menu">
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#" className="active">Contact</a></li>
      </ul>
      <div className="nav-buttons">
        <div className="language-switcher">
          <select>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>

        {userProfile && (
          <div className="user-profile" onClick={toggleDropdown}>
            <img src={userProfile.image} alt="Profile" className="profile-pic" />
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <span>{userProfile.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
