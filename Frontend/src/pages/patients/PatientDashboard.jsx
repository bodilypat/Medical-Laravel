/* 
| #src/pages/patients/PatientDashboard.jsx
| Patient Managemnt handles
|        => Patient Registration
|        => Patient Profile
|        => Medical history Tracking
|        => Appointment Records
|        => Prescriptions Records
|        => Billing history
|        => Lab reports  
*/ 
import React, { useEffect, useState } from 'react';

const PatientDashboard = () => {
    const [patients, setPatients] = React.useState([]);
    const [appointments, setAppointments] = React.useState([]);
    const [prescriptions, setPrescriptions] = React.useState([]);
    
    useEffect(() => {
        fetchPatientsData();
        fetchAppointmentsData();
        fetchPrescriptionsData();
    }, []);

    const fetchPatientsData = async () => {
        try {
            const response = await fetch('/api/patient/profile');
            const data = await response.json();
            setPatients(data);
        } catch (error) {
            console.error('Error fetching patients data:', error);
        }
    };

    const fetchAppointmentsData = async () => {
        try {
            const response = await fetch('/api/patient/appointments');
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments data:', error);
        }
    };

    const fetchPrescriptionsData = async () => {
        try {
            const response = await fetch('/api/patient/prescriptions');
            const data = await response.json();
            setPrescriptions(data);
        } catch (error) {
            console.error('Error fetching prescriptions data:', error);
        }
    };

    return (
        <div className="patient-dashboard">
            <h1>Patient Dashboard</h1>
            <section>
                <h2>Patient Profile</h2>
                {patients.length > 0 ? (
                    <ul>
                        {patients.map((patient) => (
                            <li key={patient.id}>{patient.name} - {patient.age} years</li>
                        ))}
                    </ul>
                ) : (
                    <p>No patient data available.</p>
                )}
            </section>
            <section>
                <h2>Appointments</h2>
                {appointments.length > 0 ? (
                    <ul>
                        {appointments.map((appointment) => (
                            <li key={appointment.id}>{appointment.date} - {appointment.doctor}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No appointment data available.</p>
                )}
            </section>
            <section>
                <h2>Prescriptions</h2>
                {prescriptions.length > 0 ? (
                    <ul>
                        {prescriptions.map((prescription) => (
                            <li key={prescription.id}>{prescription.medication} - {prescription.dosage}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No prescription data available.</p>
                )}
            </section>
        </div>
    );
};

export default PatientDashboard;



