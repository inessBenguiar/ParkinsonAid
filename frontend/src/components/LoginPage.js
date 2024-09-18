import React, { useState } from 'react';
import Nav from './Nav';
import './LoginPage.css';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
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
            <h1 className="login-title">{t('login.title')}</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">{t('login.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('login.emailPlaceholder')}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">{t('login.passwordLabel')}</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('login.passwordPlaceholder')}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                {t('login.loginButton')}
              </button>
            </form>
            <div className="login-footer">
              <a href="/signup">{t('login.createAccount')}</a>
              <a href="/forgot-password">{t('login.forgotPassword')}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
