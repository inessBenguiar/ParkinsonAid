// src/components/Nav.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importez le hook useTranslation
import './Nav.css';

const Nav = ({ userProfile, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Utilisez le hook useTranslation

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Change la langue sélectionnée
  };

  return (
    <nav className="nav-custom">
      <div className="nav-logo">
        <a href="#">
          <span className="logo-green">PARKINSON</span> <span className="logo-black">AID</span>
        </a>
      </div>
      <ul className="nav-menu">
        <li><a href="#">{t('nav.menu')}</a></li>
        <li><a href="#">{t('nav.about')}</a></li>
        <li><a href="#" className="active">{t('nav.contact')}</a></li>
      </ul>
      <div className="nav-buttons">
        <div className="language-switcher">
          <select onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">{t('nav.languageSwitcher.en')}</option>
            <option value="fr">{t('nav.languageSwitcher.fr')}</option>
          </select>
        </div>

        {userProfile && (
          <div className="user-profile-custom" onClick={toggleDropdown}>
            <img src={userProfile.image} alt="Profile" className="profile-pic-custom" />
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <span>{userProfile.name}</span>
              <button onClick={handleLogout}>{t('nav.logout')}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
