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
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import HistoryPage from './pages/HistoryPage';
import Prediction from './pages/Prediction';
import Profiledr from './pages/Profiledr';


function App() {
  return (
      <div className="App">
      <Profiledr/>
      </div>
  );
}

export default App;







