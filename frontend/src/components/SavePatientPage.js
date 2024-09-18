import React from 'react';
import './SavePatientPage.css';
import Nav from './Nav';
import { useTranslation } from 'react-i18next';

const SavePatientPage = () => {
  const { t } = useTranslation();

  return (
    <div className="save-patient-page">
      <Nav />
      <form className="patient-form">
        <h2>{t('savePatient.patientTitle')}</h2>
        <div className="form-group">
          <label>{t('savePatient.nameLabel')} :</label>
          <input type="text" placeholder={t('savePatient.namePlaceholder')} />
          <label>{t('savePatient.idLabel')} :</label>
          <input type="text" placeholder={t('savePatient.idPlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.dobLabel')} :</label>
          <input type="date" />
          <label>{t('savePatient.genderLabel')} :</label>
          <select>
            <option value="">{t('savePatient.genderPlaceholder')}</option>
            <option value="male">{t('savePatient.male')}</option>
            <option value="female">{t('savePatient.female')}</option>
          </select>
        </div>

        <div className="form-group">
          <label>{t('savePatient.phoneLabel')} :</label>
          <input type="text" placeholder={t('savePatient.phonePlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.emailLabel')} :</label>
          <input type="email" placeholder={t('savePatient.emailPlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.irmLabel')} :</label>
          <input type="number" placeholder={t('savePatient.irmPlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.diagnosisLabel')} :</label>
          <input type="text" placeholder={t('savePatient.diagnosisPlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.descriptionLabel')} :</label>
          <textarea placeholder={t('savePatient.descriptionPlaceholder')}></textarea>
        </div>

        <div className="form-group">
          <label>{t('savePatient.updateLabel')} :</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>{t('savePatient.doctorLabel')} :</label>
          <input type="text" placeholder={t('savePatient.doctorPlaceholder')} />
        </div>

        <h3>{t('savePatient.emergencyTitle')}</h3>
        <div className="form-group">
          <label>{t('savePatient.emergencyNameLabel')} :</label>
          <input type="text" placeholder={t('savePatient.emergencyNamePlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.relationLabel')} :</label>
          <input type="text" placeholder={t('savePatient.relationPlaceholder')} />
        </div>

        <div className="form-group">
          <label>{t('savePatient.emergencyPhoneLabel')} :</label>
          <input type="text" placeholder={t('savePatient.emergencyPhonePlaceholder')} />
        </div>

        <div className="form-submit">
          <button type="submit">{t('savePatient.submitButton')}</button>
        </div>
      </form>
    </div>
  );
};

export default SavePatientPage;
