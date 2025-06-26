import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // If styling needed, or remove if not used

function ContactFormNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactFormNew;
