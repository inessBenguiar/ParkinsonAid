import React from 'react';
import Nav from './Nav';
import './PrivacyPage.css';

const TermsPage = () => {
    return (
        <>
            <Nav />
            <div className="privacy-container">
                <h1 className="privacy-title">Terms & Conditions</h1>
                <p className="privacy-text">
                Welcome to ParkinsonAid. a platform dedicated to providing advanced AI-driven analysis of MRI images for the early detection of Parkinson's disease. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully, as they govern your use of our website and services.
                </p>
                <p className="privacy-text">
                    <strong>1. Acceptance of Terms:</strong><br />
                    By using ParkinsonAid, you acknowledge that you are a licensed medical professional and that you agree to be bound by these terms. Your continued use of the platform constitutes acceptance of any updates or revisions to these terms.
                    </p>
                <p className="privacy-text">
                    <strong>2. Professional Use Only:</strong><br />
                    This platform is exclusively intended for use by qualified healthcare providers, including physicians, neurologists, and other medical professionals. The analysis provided by our AI model is designed to assist in clinical decision-making but does not replace clinical judgment or diagnostic processes. You agree to use the platform solely for professional purposes related to patient care and medical research.
                    </p>
                <p className="privacy-text">
                    <strong>3. Data Privacy and Confidentiality:</strong><br />
                    We are committed to safeguarding the confidentiality of your patients' medical data. By using ParkinsonAid, you consent to the secure processing of patient MRI images and any other data provided for analysis. All data submitted is handled in compliance with Protection, ensuring patient privacy and confidentiality.
                    </p>
                <p className="privacy-text">
                    <strong>4. Medical Disclaimer:</strong><br />
                    The AI analysis provided by ParkinsonAid is intended as a supplementary tool to support the clinical evaluation of Parkinson's disease. The results are based on machine learning algorithms and should not be used as the sole basis for diagnosis or treatment decisions. Healthcare professionals must rely on their own expertise and clinical judgment.
                    </p>
                <p className="privacy-text">
                    <strong>5. Data Security and Integrity:</strong><br />
                    ParkinsonAid implements security measures to protect patient data and ensure the integrity of our AI models. However, you acknowledge that no system is completely secure, and we cannot guarantee absolute protection against potential data breaches or system failures. You are responsible for ensuring the appropriate use and security of your account.
                    </p>
                    <p className="privacy-text">
                    <strong>6. Intellectual Property:</strong><br />
                    The intellectual property rights for all content and software on the ParkinsonAid platform, including AI models, belong to ParkinsonAid or our licensors. As a user, you are granted a limited, non-exclusive license to use the platform for professional purposes. Unauthorized copying, distribution, or modification of any content is strictly prohibited.
                    </p>
                    <p className="privacy-text">
                    <strong>7. Limitation of Liability:</strong><br />
                    ParkinsonAid strives to provide accurate and reliable results. However, we make no guarantees regarding the completeness, accuracy, or timeliness of the AI analysis. We are not liable for any direct or indirect damages resulting from the use of this platform, including but not limited to medical decisions based on AI results.
                    </p>
                    <p className="privacy-text">
                    <strong>8. User Responsibilities:</strong><br />
                    As a healthcare professional using ParkinsonAid, you are responsible for maintaining the security of your account and ensuring that the platform is used in compliance with all relevant laws and ethical guidelines. You agree to notify us immediately of any unauthorized use of your account.
                    </p>
                    <p className="privacy-text">
                    <strong>9. Modifications to the Service:</strong><br />
                    We reserve the right to modify, update, or discontinue any features of ParkinsonAid without prior notice. We also reserve the right to update these Terms & Conditions as needed to reflect changes in regulations or platform functionality.
                    </p>
                   
                    
                <button className="back-button" onClick={() => window.history.back()}>Back</button>
            </div>
        </>
    );
};

export default TermsPage;
