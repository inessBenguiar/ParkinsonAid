

import React from 'react';
import './NavbarLog.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
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
}

export default Navbar;
