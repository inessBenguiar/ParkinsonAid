import React, { useState } from 'react';
import Nav from './Nav';
import './SignUpPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { t } = useTranslation(); // Hook de traduction
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreeTerms) {
      setErrorMessage(t('signup.errorMessage'));
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
            <h1 className="login-title">{t('signup.title')}</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="username">{t('signup.nameLabel')}</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={t('signup.namePlaceholder')}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">{t('signup.emailLabel')}</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('signup.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="password">{t('signup.passwordLabel')}</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('signup.passwordPlaceholder')}
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
                  /> {t('signup.agreeTerms')} <a href="#" className="terms-link">{t('signup.termsLink')}</a>
                </label>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="login-button" disabled={!agreeTerms}>
                {t('signup.signupButton')}
              </button>
            </form>
            <div className="login-footer">
              <p>{t('signup.alreadyAccount')} <a href="/login" className="login-link">{t('signup.loginLink')}</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
