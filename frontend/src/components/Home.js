import React from 'react';
import './Home.css';
import doctorImage from '../assets/images/doctor-image.png';
import brainImage from '../assets/images/brain-image.png';

const Home= () => {
  return (
    <div className="Home">
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="#">
          <span className="logo-green">PARKINSON</span> <span className="logo-white">AID</span>
        </a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#" className="active">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-login">Log In</button>
        <button className="btn-signup">Sign Up</button>
        <div className="language-switcher1">
          <select>
            <option value="en">English</option>
            <option value="fr">Français</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>
    </nav>

    <header className="header-section">
      <div className="header-overlay">
        <h1>
          Detect <span className="highlight-green">Parkinson</span> With Precision, Act With <span className="highlight-green">Confidence</span>
        </h1>
      </div>
    </header>

    <div className="begin-section">
      <div className="begin-image">
        <img src={doctorImage} alt="Doctor with MRI" className="image-border"/>
      </div>
      <div className="separator"><h2></h2></div>
      <div className="begin-content">
        <h2>How to Begin Using <br />Parkinson Aid</h2>
        <p>
        Parkinson Aid is designed exclusively for neurologists and healthcare professionals 
        to leverage advanced MRI-based diagnostics for Parkinson’s disease.
         By utilizing our platform, you can seamlessly upload and analyze high-resolution
          MRI scans using state-of-the-art AI algorithms tailored to detect early signs of
           Parkinson’s with exceptional accuracy. Once you sign up, you’ll be able 
           to securely store and manage your patients' MRI data, allowing for ongoing
            monitoring and easy access to historical records. Begin your journey with 
            Parkinson Aid today and integrate powerful, data-driven insights into your 
            practice for improved patient care.
        </p>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>

    <div className="how-section">
      <div className="how-content">
         <div className="title-container">
            <h2>How It Works Behind <br />the Scenes</h2>
            <div className="separator2"></div>
         </div>
        <p>
        Behind the scenes, Parkinson Aid harnesses the power of advanced
        machine learning to analyze MRI scans with precision and speed. 
        Our AI model has been trained on thousands of images to recognize
        subtle patterns and changes in the brain that are early indicators
        of Parkinson’s disease. When a new MRI scan is uploaded, the model 
        processes it, compares it with vast datasets, and identifies potential
        markers that might not be visible to the human eye. The result is 
        a reliable, data-driven analysis that helps doctors make more 
        informed decisions, all while continuously learning and improving 
        from new data. This cutting-edge technology brings a 
        new level of confidence and accuracy to Parkinson’s detection.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>

      <div className="how-image">
        <img src={brainImage} alt="Doctor with MRI" className="image-border"/>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-links">
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Parkinson Aid. All rights reserved.
      </div>
    </footer>
    
    </div>
  );
};

export default Home;