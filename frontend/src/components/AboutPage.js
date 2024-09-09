import React from "react";
import "./AboutPage.css";
import Nav from "./Nav"
import ikramImg from "../assets/images/ikram.png";
import safiaImg from "../assets/images/ines.png";
import supervisorImg from "../assets/images/supervisor.png";
const AboutPage = () => {
  return (
    <>
    <Nav />
    <div className="about-container">
      {/* Première partie */}
      <h1 className="about-title">
        About <span className="highlight">PARKINSON </span>AID
      </h1>
      <div className="about-sections">
        <div className="about-section">
          <h2 className="section-title">Project Information</h2>
          <p className="section-text">
            PARKINSON AID is a web-based application designed to assist
            neurologists in the diagnosis of Parkinson's disease using MRI
            images. The platform allows medical professionals to upload multiple
            MRI scans simultaneously and receive a binary result indicating the
            presence or absence of Parkinson's disease. As part of a practical
            internship, this work is done by a pair of students.
          </p>
        </div>
        <div className="about-section">
          <h2 className="section-title">Technical Details</h2>
          <p className="section-text">
            Our project leverages machine learning techniques to assist doctors
            in diagnosing Parkinson's disease using MRI images. It uses the NTUA
            Parkinson’s Dataset. Before feeding the images into our models, we
            apply several preprocessing techniques to enhance their quality and
            make them more suitable for analysis, and then we train our model to
            learn the differences between healthy and Parkinson’s-affected
            brains.
          </p>
        </div>
      </div>

      {/* Deuxième partie */}
      <div className="vision-mission-values">
        <h1 className="vmv-title">
          Our Vision, Mission, and Values
        </h1>
        <div className="vmv-underline"></div>

        <div className="vmv-sections">
          <div className="vmv-item">
            <div className="vmv-icon vision-icon"></div>
            <h2 className="vmv-subtitle">Vision</h2>
            <p className="vmv-text">
              Our vision is to revolutionize the early diagnosis of Parkinson's
              disease through innovative technology, making advanced diagnostic
              tools accessible to medical professionals. We aim to empower
              healthcare providers with accurate, efficient, and reliable
              solutions that enhance patient care and improve outcomes.
            </p>
          </div>

          <div className="vmv-item">
            <div className="vmv-icon mission-icon"></div>
            <h2 className="vmv-subtitle">Mission</h2>
            <p className="vmv-text">
              Our mission is to develop a user-friendly, AI-powered platform
              that assists neurologists in the timely and accurate diagnosis of
              Parkinson's disease. We strive to bridge the gap between
              cutting-edge technology and clinical practice by offering a robust
              tool that simplifies the diagnostic process, enabling doctors to
              focus on patient care.
            </p>
          </div>

          <div className="vmv-item">
            <div className="vmv-icon values-icon"></div>
            <h2 className="vmv-subtitle">Values</h2>
            <p className="vmv-text">
              <b>- Accuracy:</b> Ensuring the highest level of diagnostic precision is
              our top priority, as we understand the critical importance of
              accurate medical assessments.
              <br />
              <b>- Accessibility:</b> We believe in making advanced diagnostic
              technologies accessible to all healthcare providers, regardless of
              their location or resources.
              <br />
              <b>- Collaboration:</b> We value the power of teamwork and
              collaboration, working closely with medical professionals to
              continuously improve our platform based on their feedback and
              needs.
              <br />
              <b>- Integrity:</b> We uphold the highest standards of integrity in
              our work, ensuring the confidentiality and security of patient
              data while delivering trustworthy results.
              <br />
              <b>- Empathy:</b> We recognize the human element in healthcare and strive to support doctors and patients with compassionate, user-centric solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="team-section">
        <h1 className="vmv-title">Team</h1>
        <div className="vmv-underline"></div>
        <div className="section-underline"></div>
        <div className="team-members">
          <div className="team-member">
            <img src={ikramImg} alt="Ikram" className="team-img" />
            <h3>ZERROUKI Ikram</h3>
            <p>Computer science student at High National School Of Computer Science - ESI</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ikram-zerrouki-385b12232/" className="social-link">LinkedIn</a>
              <a href="mailto:ki_zerrouki@esi.dz" className="social-link">Gmail</a>
            </div>
          </div>
          <div className="team-member">
            <img src={safiaImg} alt="Safia" className="team-img" />
            <h3>BENGUIAR Safia Ines</h3>
            <p>Computer science student at High National School Of Computer Science - ESI</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/safia-ines-benguiar-2a46531a3/" className="social-link">LinkedIn</a>
              <a href="mailto:is_benguiar@esi.dz" className="social-link">Gmail</a>
            </div>
          </div>
        </div>

        <h1 className="vmv-title">Supervised By</h1>
        <div className="vmv-underline"></div>
        <div className="section-underline"></div>
        <div className="supervisor">
          <img src={supervisorImg} alt="Supervisor" className="supervisor-img" />
          <h3>Ms. Boulkrinat Nour El Houda</h3>
          <p>
            Research associate - Information Systems and Multimedia Systems Division (DSISM)
            <br />
            Center for Research on Scientific and Technical Information - CERIST
          </p>
          <p>
            5 Rue des 3 Frères Aïssou, Ben Aknoun BP 16030 Alger
            <br />
            Phone: 021 91 21 86
            <br />
            Email: <a href="mailto:nboulkrinat@cerist.dz">nboulkrinat@cerist.dz </a>,
            <a href="mailto:nboulkrinat@gmail.com"> nboulkrinat@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
