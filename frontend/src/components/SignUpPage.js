import React, { useState } from 'react';
import Nav from './Nav';
import './SignUpPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreeTerms) {
      setErrorMessage("You must agree to the terms & conditions before signing up.");
      return;
    }
    
    // Logique de gestion de l'inscription
    console.log('Name', username, 'Email:', email, 'Password:', password, 'Terms:', agreeTerms);
  };

  return (
    <>
      <Nav />
      <div className="signup-page">
        <div className="login-container">
          <div className="login-box">
            <h1 className="login-title">Sign UP</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="username">Name</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label>
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    required
                  /> I read and agree to  <a href="#" className="terms-link">terms & conditions</a>
                </label>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="login-button" disabled={!agreeTerms}>
                Sign Up
              </button>
            </form>
            <div className="login-footer">
              <p>Already have an Account? <a href="/login" className="login-link">Log In</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
