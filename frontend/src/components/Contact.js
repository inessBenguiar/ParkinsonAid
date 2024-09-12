
import React from "react";
import "./Contact.css";
import Nav from './Nav';
import AddressIcon from "../assets/images/Frame-1.png"; 
import PhoneIcon from "../assets/images/Frame.png";
import EmailIcon from "../assets/images/Layer_1.png";

const Contact = () => {
  return (
    <>
    <Nav />
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-sections"> {/* Nouveau conteneur */}
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Please fill out the form below to send us an email and we will respond as soon as possible.</p>
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="feedback-section">
            <h2>Send Feedback</h2>
            <p>Your feedback is important to us ! Please let us know how we can improve our service or share any thoughts you have about ParkinsonAid.</p>
            <button className="feedback-button">Fill in the form</button>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><img src={AddressIcon} alt="Address Icon" className="icon" /> 5 Rue des 3 Frères Aïssou, Ben Aknoun BP 16030 Alger</p>
          <p><img src={PhoneIcon} alt="Phone Icon" className="icon" /> 021 91 21 86</p>
          <p><img src={EmailIcon} alt="Email Icon" className="icon" /> nboulkrinat@cerist.dz , nboulkrinat@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;