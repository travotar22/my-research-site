import React, { useState } from 'react';
import './Footer.css'; // make sure to link the correct path to your CSS file

const Footer = () => {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission here, e.g., send data to an API endpoint
        console.log({ email, title, description });

        // After handling submission, reset the form or give a success message
        setEmail('');
        setTitle('');
        setDescription('');
    };

    return (
        <footer className="site-footer">
        <div className="footer-content">
            <img src="\Logo.png" alt="Logo" className="footer-logo" />
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email Address:</label>
                        <input 
                            type="email" 
                            id="userEmail" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailTitle">Title:</label>
                        <input 
                            type="text" 
                            id="emailTitle" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            id="description" 
                            rows="4" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </footer>
);
};

export default Footer;
