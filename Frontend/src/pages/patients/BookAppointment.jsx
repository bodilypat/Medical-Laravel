/* src/pages/patients/BookAppointment.jsx */

import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointment, setAppointment] = useState({
        doctorId: '',
        date: '',
        time: '',
        reason: ''
    });

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('/api/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/appointments', appointment);
            alert('Appointment booked successfully!');
            setAppointment({
                doctorId: '',
                date: '',
                time: '',
                reason: ''
            });
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment. Please try again.');
        }
    };

    return (
        <div className="book-appointment">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="doctorId">Select Doctor:</label>
                    <select name="doctorId" value={appointment.doctorId} onChange={handleChange} required>
                        <option value="">--Select Doctor--</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" value={appointment.date} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="time" name="time" value={appointment.time} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="reason">Reason for Appointment:</label>
                    <textarea name="reason" value={appointment.reason} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookAppointment;

