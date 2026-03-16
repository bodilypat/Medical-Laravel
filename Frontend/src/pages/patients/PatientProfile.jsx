/* src/pages/patients/PatientProfile.jsx */ 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientProfile = () => {
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        bloodGroup: ''
    });

    useEffect(() => {
        fetchPatientProfile();
    }, []);

    // Fetch patient profile data from the backend
    const fetchPatientProfile = async () => {
        try {
            const response = await axios.get('/api/patient/profile');
            setPatient(response.data);
        } catch (error) {
            console.error('Error fetching patient profile:', error);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission to update patient profile
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put('/api/patient/profile', patient);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="patient-profile">
            <h1>Patient Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={patient.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={patient.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" value={patient.gender} onChange={handleChange} required>
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"  
                        value={patient.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={patient.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={patient.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        name="address"
                        value={patient.address}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select name="bloodGroup" value={patient.bloodGroup} onChange={handleChange}>
                        <option value="">--Select Blood Group--</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default PatientProfile;

