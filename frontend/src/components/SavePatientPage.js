import React from 'react';
import './SavePatientPage.css';
import Nav from './Nav';
const SavePatientPage = () => {
  return (
    <div className="save-patient-page">
        <Nav />
      <form className="patient-form">
        <h2>Patient</h2>
        <div className="form-group">
          <label>Name :</label>
          <input type="text" placeholder="Enter patient name" />
          <label>ID Patient :</label>
          <input type="text" placeholder="Enter patient ID" />
        </div>

        <div className="form-group">
          <label>Date Of Birthday :</label>
          <input type="date" />
          <label>Sexe :</label>
          <select>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Phone Number :</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label>Email Address :</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Number Of IRM Images :</label>
          <input type="number" placeholder="Enter number" />
          </div>
          <div className="form-group">
          <label>Diagnosis Result :</label>
          <input type="text" placeholder="Enter diagnosis result" />
        </div>

        <div className="form-group">
          <label>Description :</label>
          <textarea placeholder="Enter description"></textarea>
        </div>

        <div className="form-group">
          <label>Date Of Last Update :</label>
          <input type="date" />
          </div>
          <div className="form-group">
          <label>Name Of Doctor :</label>
          <input type="text" placeholder="Enter doctor's name" />
        </div>

        <h3>Person To Contact In Case Of Emergency - Tap (/) If Not</h3>
        <div className="form-group">
          <label>Name :</label>
          <input type="text" placeholder="Enter emergency contact name" />
        </div>

        <div className="form-group">
          <label>Relation With Patient :</label>
          <input type="text" placeholder="Enter relation" />
        </div>

        <div className="form-group">
          <label>Phone Number :</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SavePatientPage;
