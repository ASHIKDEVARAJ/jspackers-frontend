import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
    date: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await axios.post("http://localhost:8080/api/bookings", formData);
      console.log(response.data);
      setStatus("Booking submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        fromAddress: "",
        toAddress: "",
        date: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Error submitting booking. Please try again.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Move</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="fromAddress"
        placeholder="From Address"
        value={formData.fromAddress}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="toAddress"
        placeholder="To Address"
        value={formData.toAddress}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit Booking</button>
      <p style={{ marginTop: "10px", color: "green" }}>{status}</p>
    </form>
  );
}

export default BookingForm;
