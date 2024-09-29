import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Ensure you have the proper styling in place

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        projectType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Redirect to homepage
        navigate('/');
    };

    return (
        <div className="form-wrapper">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>First name*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Email address*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Project type*</label>
                        <input
                            type="text"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Message*</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            {/* Heading Section */}
            <h1>Get in Touch</h1>
        </div>
    );
}