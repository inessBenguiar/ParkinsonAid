import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import SignupPage from './pages/SignupPage';
import Upload from './pages/Upload';


function App() {
  return (
      <div className="App">
      <Upload/>
      </div>
  );
}

export default App;







