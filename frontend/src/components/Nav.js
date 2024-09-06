import React from 'react';
import './Nav.css';

const Nav = () => {
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
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
