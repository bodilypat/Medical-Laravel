/* src/pages/patients/AppointmentHistory.jsx */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('/api/patient/appointments');
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        if (!window.confirm('Are you sure you want to cancel this appointment?')) {
            return;
        }

        try {
            await axios.delete(`/api/appointments/${appointmentId}`);
            alert('Appointment cancelled successfully!');
            fetchAppointments(); // Refresh the appointment list
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            alert('Failed to cancel appointment. Please try again.');
        }
    };

    return (
        <div className="appointment-history">
            <h1>Appointment History</h1>
            {appointments.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Specialization</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.specialization}</td>
                                <td>{new Date(appointment.date).toLocaleDateString()}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.status}</td>
                                <td>
                                    {appointment.status === 'Scheduled' && (
                                        <button onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No appointment history available.</p>
            )}
        </div>
    );
};

export default AppointmentHistory;




