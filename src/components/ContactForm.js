import React, { useState } from 'react';
import axios from 'axios';
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // ✅ Update with your Railway backend URL
      const response = await axios.post(
        'https://jspackers-backend-production.up.railway.app/api/contact',
        formData
      );
      console.log(response.data);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // clear form
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        <FaPhone /> 6380932235 &nbsp;|&nbsp;
        <FaEnvelope /> devajos517@gmail.com
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
        <p style={{ color: 'green', marginTop: '10px' }}>{status}</p>
      </form>
    </div>
  );
}

export default ContactForm;
