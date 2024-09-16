import React, { useState } from 'react';
import Nav from '../components/Nav';
import "./ProfileDr.css";

function Profiledr() {
    const [isConnected, setIsConnected] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        phoneNumber: '',
        email: '',
        sexe: '',
        description: '',
    });
    const [uploadedFile, setUploadedFile] = useState(null);

    const userProfile = {
      name: 'John Doe',
      image: 'https://via.placeholder.com/40',
    };

    const handleLogout = () => {
      setIsConnected(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    const handleSave = () => {
        console.log("Form Data: ", formData);
        console.log("Uploaded File: ", uploadedFile);
        // You can add logic to submit the data to a backend or save it elsewhere
    };

    const handleExit = () => {
        // Logic to handle exit, possibly redirecting to another page
        console.log("Exit clicked");
    };

    return (
      <div className="profiledr-page">
          <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />

          <div className="profile-form">
            <h2>Profile informations </h2>

            <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
            />

            <label>Date Of Birth:</label>
            <input 
                type="date" 
                name="dateOfBirth" 
                value={formData.dateOfBirth} 
                onChange={handleInputChange} 
            />

            <label>Phone Number:</label>
            <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleInputChange} 
            />

            <label>Email Address:</label>
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
            />

            <label>Sexe:</label>
            <select 
                name="sexe" 
                value={formData.sexe} 
                onChange={handleInputChange}
            >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label>Description:</label>
            <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange} 
            />

            <div className="file-upload">
                <label>Upload MRI Image:</label>
                <input 
                    type="file" 
                    accept="image/jpeg, image/png" 
                    onChange={handleFileChange} 
                />
                {uploadedFile && <p>File: {uploadedFile.name}</p>}
            </div>

            <div className="buttonsP">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleExit}>Exit</button>
            </div>
          </div>
      </div>
    );
}

export default Profiledr;