import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Owner: Devaraj | Phone: 6380932235 | Email: devajos517@gmail.com</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
