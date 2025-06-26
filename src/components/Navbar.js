import React from 'react';

const Navbar = () => {
  return (
    
    <nav style={{
      backgroundColor: "#004080",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "8px"
    }}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>JS Packers & Movers</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#contact">Contact</a> 
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#booking" style={linkStyle}>Booking</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};

export default Navbar;
