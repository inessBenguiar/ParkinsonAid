import React, { useEffect, useState } from 'react';
import './ViewMorePatient.css';
import Nav from './Nav';

const ViewMorePatientPage = () => {
  // Simuler la récupération des informations depuis le backend
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Ici, tu peux appeler une API pour récupérer les informations du patient depuis le backend.
    // Je vais simuler des données pour l'exemple.
    const fetchPatientData = async () => {
      const data = {
        name: 'John Doe',
        id: '12345',
        birthday: '1980-01-15',
        gender: 'Male',
        phone: '05-55-12-34-97',
        email: 'johndoe@example.com',
        numberOfIRM: 5,
        diagnosisResult: 'Parkinson’s',
        description: 'The patient has been experiencing symptoms for 3 years.',
        lastUpdate: '2024-09-10',
        doctorName: 'Dr. Smith',
        emergencyContact: {
          name: 'Jane Doe',
          relation: 'Wife',
          phone: '05-55-67-89-36',
        },
      };
      setPatientData(data);
    };

    fetchPatientData();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-more-patient-page">
      <Nav />
      <div className="patient-details">
        <h2>Patient Information</h2>
        <div className="info-group">
          <label>Name:</label>
          <p>{patientData.name}</p>
        </div>
        <div className="info-group">
          <label>ID Patient:</label>
          <p>{patientData.id}</p>
        </div>
        <div className="info-group">
          <label>Date Of Birthday:</label>
          <p>{patientData.birthday}</p>
        </div>
        <div className="info-group">
          <label>Sexe:</label>
          <p>{patientData.gender}</p>
        </div>
        <div className="info-group">
          <label>Phone Number:</label>
          <p>{patientData.phone}</p>
        </div>
        <div className="info-group">
          <label>Email Address:</label>
          <p>{patientData.email}</p>
        </div>
        <div className="info-group">
          <label>Number Of IRM Images:</label>
          <p>{patientData.numberOfIRM}</p>
        </div>
        <div className="info-group">
          <label>Diagnosis Result:</label>
          <p>{patientData.diagnosisResult}</p>
        </div>
        <div className="info-group">
          <label>Description:</label>
          <p>{patientData.description}</p>
        </div>
        <div className="info-group">
          <label>Date Of Last Update:</label>
          <p>{patientData.lastUpdate}</p>
        </div>
        <div className="info-group">
          <label>Name Of Doctor:</label>
          <p>{patientData.doctorName}</p>
        </div>

        <h3>Person To Contact In Case Of Emergency</h3>
        <div className="info-group">
          <label>Name:</label>
          <p>{patientData.emergencyContact.name}</p>
        </div>
        <div className="info-group">
          <label>Relation With Patient:</label>
          <p>{patientData.emergencyContact.relation}</p>
        </div>
        <div className="info-group">
          <label>Phone Number:</label>
          <p>{patientData.emergencyContact.phone}</p>
        </div>
        <div className="form-submit">
        {/* Bouton Back sans fonctionnalité de navigation */}
        <button type="button" className="back-button">Back</button>
      </div>
      </div>
    </div>
  );
};

export default ViewMorePatientPage;
