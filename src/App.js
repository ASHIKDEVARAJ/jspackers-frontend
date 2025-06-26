import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import ContactFormNew from "./components/ContactFormNew"; // ✅ import added

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <Navbar />

      <header
        style={{
          backgroundColor: "#0a66c2",
          padding: "20px",
          color: "white",
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        <h1>JS Packers and Movers</h1>
        <p>Your trusted partner for shifting services in Tamil Nadu & Kerala</p>
      </header>

      <div id="booking">
        <BookingForm />
      </div>

      {/* ✅ Contact Form Section */}
      <section
        id="contact"
        style={{
          marginTop: "50px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0a66c2", marginBottom: "20px" }}>
        
        </h2>
        <ContactFormNew />
      </section>

      <footer style={{ marginTop: "30px", textAlign: "center", color: "#555" }}>
        <section
          style={{
            marginTop: "30px",
            background: "linear-gradient(to right, #e0f7fa, #ffffff)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            borderLeft: "6px solid #0a66c2"
          }}
        >
          <h2 style={{ color: "#0a66c2", marginBottom: "15px", fontSize: "26px" }}>
            About JS Packers and Movers
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333" }}>
            At <strong>JS Packers and Movers</strong>, we provide fast, safe, and reliable home and office relocation
            services across <strong>Tamil Nadu</strong> and <strong>Kerala</strong>. Our 24/7 team is experienced in{" "}
            <strong>loading/unloading</strong>, <strong>furniture fitting</strong>, and <strong>door-to-door moving</strong>.
          </p>
          <p style={{ marginTop: "10px" }}>
            We take pride in delivering customer satisfaction through affordable and on-time service.
          </p>
        </section>

        <p>
          Contact us: <strong>6380932235</strong> | <strong>devajos517@gmail.com</strong>
        </p>
        <p>© 2025 JS Packers and Movers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
