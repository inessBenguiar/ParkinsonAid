import React, { useState } from 'react';
import Nav from "../components/Nav";
import "./PrivacyPolicy.css"; // Import the CSS file

function PrivacyPolicy() {
    const [isConnected, setIsConnected] = useState(true);

    const userProfile = {
      name: 'John Doe',
      image: 'https://via.placeholder.com/40',
    };

    const handleLogout = () => {
      setIsConnected(false);
    };

    return (
        <div className="privacy-policy-page">
            <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />
            <main className="main-content">
                <h2>Privacy Policy</h2>

                <section>
                    <p>
                        At <strong>ParkinsonAid</strong>, developed by <strong>CERIST</strong> (Centre de Recherche sur l'Information Scientifique et Technique), one of our top priorities is the privacy and security of personal and medical data uploaded to our platform. This Privacy Policy document explains the types of information we collect, how we use it, and the rights of users regarding their data.
                    </p>
                </section>

                <section>
                    <h3>1. Information We Collect</h3>
                    <p>We collect and process the following types of information:</p>
                    <ul>
                        <li>
                            <strong>Personal Information</strong>: When registering as a medical professional on our platform, we may collect your name, contact information, medical credentials, and other relevant professional data.
                        </li>
                        <li>
                            <strong>Medical Images</strong>: The images of patients suspected of having Parkinson's that are uploaded to the platform for prediction are stored and processed securely.
                        </li>
                        <li>
                            <strong>Technical Data</strong>: We collect technical information, including IP address, browser type, device information, and usage data to improve our services and user experience.
                        </li>
                        <li>
                            <strong>Cookies and Usage Data</strong>: Cookies may be used to track your activity on our platform to enhance functionality and security.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>2. How We Use Your Information</h3>
                    <p>CERIST uses the data collected on ParkinsonAid for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain the Parkinson's disease prediction service.</li>
                        <li>To notify users about updates or changes to the platform.</li>
                        <li>To analyze data and improve the functionality and security of the platform.</li>
                        <li>To offer technical support and respond to inquiries.</li>
                        <li>To ensure compliance with applicable regulations and laws.</li>
                    </ul>
                </section>

                <section>
                    <h3>3. Data Sharing and Disclosure</h3>
                    <p>We do not sell or trade any personal information or medical data. Your data is only shared in limited circumstances:</p>
                    <ul>
                        <li><strong>Service Providers</strong>: We may collaborate with third-party service providers (such as hosting services) to perform tasks on our behalf, under strict confidentiality agreements.</li>
                        <li><strong>Legal Obligations</strong>: We may disclose your data if required by law or in response to requests from public authorities.</li>
                    </ul>
                </section>

                <section>
                    <h3>4. Data Security</h3>
                    <p>CERIST prioritizes the security of personal and medical data. We use advanced security protocols, including encryption and access controls, to safeguard all uploaded data from unauthorized access or misuse.</p>
                </section>

                <section>
                    <h3>5. Your Privacy Rights</h3>
                    <p>Users of ParkinsonAid have the following rights regarding their data:</p>
                    <ul>
                        <li>The right to access, update, or delete personal information and uploaded medical data.</li>
                        <li>The right to withdraw consent for data processing at any time.</li>
                        <li>The right to request a copy of personal data in accordance with applicable laws.</li>
                    </ul>
                    <p>To exercise these rights, please contact us via email at <a href="mailto:support@parkinsonaid.com">support@parkinsonaid.com</a>.</p>
                </section>

                <section>
                    <h3>6. Third-Party Links</h3>
                    <p>Our platform may contain links to external websites. Please note that this Privacy Policy does not apply to those third-party websites, and CERIST is not responsible for the privacy practices of other sites.</p>
                </section>

                <section>
                    <h3>7. Changes to This Privacy Policy</h3>
                    <p>CERIST reserves the right to update this Privacy Policy as needed. Any changes will be reflected on this page, and we encourage users to review the Privacy Policy periodically.</p>
                </section>

                <section>
                    <h3>8. Contact Us</h3>
                    <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
                    <ul>
                        <li>Email: <a href="mailto:support@parkinsonaid.com">support@parkinsonaid.com</a></li>
                        <li>Address: CERIST, Rue des Frères Aissiou Ben Aknoun, Algiers, Algeria</li>
                    </ul>
                </section>
            </main>

            <footer className="footerP">
                <button className="back-button">Back</button>
            </footer>
        </div>
    );
}

export default PrivacyPolicy;

