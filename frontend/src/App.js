import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import PrivacyPage from './components/PrivacyPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <div className="App">
      <Dashboard/>
      </div>
  );
}

export default App;







