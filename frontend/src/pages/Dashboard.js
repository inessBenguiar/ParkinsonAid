import React, { useState, useMemo } from 'react';
import Nav from "../components/Nav";
import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
    const [isConnected, setIsConnected] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const userProfile = {
      name: 'John Doe',
      image: 'https://via.placeholder.com/40',
    };

    const handleLogout = () => {
        setIsConnected(false);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const mockData = [
        { date: '2024-09-01', male: 30, female: 20, positive: 10, negative: 5 },
        { date: '2024-09-02', male: 25, female: 30, positive: 8, negative: 3 },
        { date: '2024-09-03', male: 20, female: 25, positive: 12, negative: 6 }
    ];

    const chartData = useMemo(() => {
        return mockData.map(data => ({
            date: data.date,
            genderData: {
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        label: 'Count',
                        data: [data.male, data.female],
                        backgroundColor: ['#42A5F5', '#66BB6A'],
                    }
                ]
            },
            diagnosisData: {
                labels: ['Parkinson Detected', 'Parkinson Not Detected'],
                datasets: [
                    {
                        label: 'Count',
                        data: [data.positive, data.negative],
                        backgroundColor: ['#4CAF50', '#FFC107'],
                    }
                ]
            }
        }));
    }, [mockData]);

    return (
        <div className="dashboard-page">
            <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />

            <div className="dashboard-content">
                <h1>Welcome, Dr {userProfile.name}!</h1>

                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for patients..." 
                        value={searchQuery} 
                        onChange={handleSearch} 
                    />
                </div>

                <h2 className="gender-heading">Gender Data:</h2>
                <div className="calendar-grid">
                    {chartData.map((data, index) => (
                        <div key={index} className="calendar-day">
                            <p>{data.date}</p>
                            <Bar
                                data={data.genderData}
                                options={{ responsive: true, maintainAspectRatio: false }}
                            />
                        </div>
                    ))}
                </div>

                <h2 className="diagnosis-heading">Diagnosis Data:</h2>
                <div className="calendar-grid">
                    {chartData.map((data, index) => (
                        <div key={index} className="calendar-day">
                            <p>{data.date}</p>
                            <Bar
                                data={data.diagnosisData}
                                options={{ responsive: true, maintainAspectRatio: false }}
                            />
                        </div>
                    ))}
                </div>

                <div className="dashboard-buttons">
                    <button className="dashboard-button">View Diagnosis History</button>
                    <button className="dashboard-button">New Diagnosis</button>
                    <button className="dashboard-button">Update Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


