// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Make the logo a link to home */}
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="logo-text">
            Uni<span className="logo-highlight">Stay</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/universities">University List</Link>
          </li>
        </ul>

        {/* Authentication Buttons wrapped in Links */}
        <div className="nav-auth">
          <Link to="/login">
            <button className="auth-btn login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="auth-btn signup-btn">Sign Up</button>
          </Link>
        </div>

        <div className="mobile-menu-icon">☰</div>
      </div>
    </nav>
  );
}
