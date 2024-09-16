import React, { useState } from 'react';
import './ProfilDoctor.css';
import defaultProfilePic from '../assets/images/profile-place.jpg';  // Place l'image par défaut ici

const ProfilDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    dob: '',
    phoneNumber: '',
    email: '',
    profilePic: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setDoctorData({
      ...doctorData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données ou sauvegarder le profil du docteur
    console.log(doctorData);
  };

  // Define handleExit function here, within the component
  const handleExit = () => {
    // Logic to exit or navigate away
    console.log("Exit button clicked");
    // For example, you can redirect to another page or clear the form
  };

  return (
    <div className="profil-doctor-page">
      <form className="doctor-form" onSubmit={handleSubmit}>
        <h2>Doctor's Profile</h2>
        <div className="form-group">
          <div className="form-left">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter doctor's name"
              value={doctorData.name}
              onChange={handleInputChange}
            />

            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={doctorData.dob}
              onChange={handleInputChange}
            />

            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={doctorData.email}
              onChange={handleInputChange}
            />

            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={doctorData.phoneNumber}
              onChange={handleInputChange}
            />

            
          </div>

          <div className="form-right">
            <label> <strong>Upload Personal Picture</strong></label>
            <div className="profile-pic-container">
              <label htmlFor="profilePicInput">
                <img
                  src={
                    doctorData.profilePic
                      ? URL.createObjectURL(doctorData.profilePic)
                      : defaultProfilePic
                  }
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="overlay">
                  <span className="upload-text">Add Photo</span>
                </div>
              </label>
              <input
                id="profilePicInput"
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}  // Cache le champ input réel
              />
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-btn">Save Profile</button>
          <button type="button" className="exit-btn" onClick={handleExit}>Exit</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilDoctor;
