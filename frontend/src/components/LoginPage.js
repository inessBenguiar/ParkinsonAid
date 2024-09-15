import React, { useState } from 'react';
import Nav from './Nav';
import './LoginPage.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, tu peux gérer la logique de connexion (appels à l'API backend Django)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <>
      <Nav />
      <div className="login-page">
        <div className="login-container">
          <div className="photo-section"></div>
          <div className="login-box">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="login-footer">
              <a href="/signup">Create an Account</a>
              <a href="/forgot-password">Forgot Password ?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;