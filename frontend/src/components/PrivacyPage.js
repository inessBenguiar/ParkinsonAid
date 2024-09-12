import React from 'react';
import Nav from './Nav';
import './PrivacyPage.css';

const PrivacyPage = () => {
    return (
        <>
            <Nav />
            <div className="privacy-container">
                <h1 className="privacy-title">Privacy Policy</h1>
                <p className="privacy-text">
                Your privacy is important to us.
                At ParkinsonAid, we understand the importance of safeguarding the privacy and confidentiality of the patients' medical information. This Privacy Policy outlines how we collect, use, and protect the data you submit through our platform, specifically tailored for healthcare professionals. By using ParkinsonAid, you agree to the collection and use of your data as described in this policy.</p>
                <p className="privacy-text">
                    <strong>1. Information We Collect:</strong><br />
                    We collect MRI images and related medical data solely for the purpose of providing AI-driven analysis to assist in detecting Parkinson's disease. This data is treated with the highest level of confidentiality and is not shared with third parties unless explicitly required by law.
                    </p>
                <p className="privacy-text">
                    <strong>2. Use of Information:</strong><br />
                    The information you provide is used exclusively to: <br />
                         - Assist in medical analysis through our AI model.<br />
                         - Improve our services and algorithms for better detection and understanding of Parkinson’s disease.<br />
                    No personal data or medical information is used for commercial purposes, marketing, or shared with external parties for research without your explicit consent.
                </p>
                <p className="privacy-text">
                    <strong>3. Data Security:</strong><br />
                    We take data security seriously and implement industry-standard measures to ensure that all patient information and medical data are securely stored and processed. This includes encryption, access control, and regular security audits. However, no system is entirely immune to breaches, and while we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                <p className="privacy-text">
                    <strong>4. Data Retention:</strong><br />
                    Medical data submitted to ParkinsonAid is retained only for the time necessary to perform the AI analysis and provide results. After the analysis is complete, data will be securely deleted unless you request otherwise or if required by applicable legal regulations to retain certain information for auditing or reporting purposes.
                    </p>
                <p className="privacy-text">
                    <strong>5. Sharing of Data:</strong><br />
                    We do not share patient data or any medical information with third parties, except in the following cases:
                    <br />
                         - When required by law (e.g., regulatory authorities).<br />
                         - To comply with legal obligations.<br />
                         - If necessary, to protect the safety and rights of ParkinsonAid or its users.
                </p>
                <p className="privacy-text">
                    <strong>6. Your Rights:</strong><br />
                    As a healthcare professional using ParkinsonAid, you have the right to:
                    <br />
                    - Access the data you have submitted.<br />
                    - Request the deletion or modification of your data.<br />
                    - Withdraw your consent at any time, subject to legal or regulatory requirements.<br />
                    For any concerns regarding data privacy, or to exercise your rights, please contact our supervisor Ms. Nour El Houda Boulkrinat.
                </p>
                <p className="privacy-text">
                    <strong>7. Changes to This Policy:</strong><br />
                    We reserve the right to update this Privacy Policy from time to time to reflect changes in regulations or our services. We will notify you of any significant changes by updating this page and providing notice through our platform.
                    </p>
                    <p className="privacy-text">
                    <strong>8. Consent:</strong><br />
                    By using ParkinsonAid, you consent to the collection and use of the data you provide as outlined in this Privacy Policy. We are committed to ensuring that the privacy of you and your patients is protected at all times.
                    </p>
                <button className="back-button" onClick={() => window.history.back()}>Back</button>
            </div>
        </>
    );
};

export default PrivacyPage;