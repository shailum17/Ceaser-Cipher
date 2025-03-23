import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Ceaser Cipher</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/learn" style={styles.link}>Learn</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginLeft:"300px",
    top:"5%",
    borderRadius:"30px",
    background: "linear-gradient(135deg, rgba(255, 192, 203, 0.8), rgba(100, 149, 237, 0.8))", 
    backdropFilter: "blur(15px)", // Frosted glass effect
    WebkitBackdropFilter: "blur(15px)", 
    color: "white",
    height: "50px",
    width:"800px",
  },
  logo: { 
    marginLeft: "20px", 
    fontSize: "24px", // Make the logo text larger
    fontWeight: "bold" 
  },
  navLinks: { 
    listStyle: "none", 
    display: "flex", 
    gap: "25px", // Increase spacing between nav items
    marginRight: "30px",
    fontSize: "18px" // Increase text size for nav links
  },
  link: { 
    color: "white", 
    textDecoration: "none",
    padding: "8px 15px", // Add padding for a button-like feel
    borderRadius: "5px",
    transition: "background 0.3s"
  },
  linkHover: {
    background: "rgba(255, 255, 255, 0.2)" // Subtle hover effect
  }
};


export default Header;
