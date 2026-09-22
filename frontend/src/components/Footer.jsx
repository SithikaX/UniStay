// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg
              className="footer-logo-icon"
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
            <span className="footer-logo-text">UniStay</span>
          </div>
          <p className="footer-description">
            Connecting students and working professionals with safe, verified,
            and affordable housing near universities and major workspaces.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Explore</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/universities">University List</a>
            </li>
            <li>
              <a href="/cities">City Hubs</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        {/* For Owners */}
        <div className="footer-links">
          <h4 className="footer-heading">For Owners</h4>
          <ul>
            <li>
              <a href="/owners">List Your Property</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/owner-guide">Owner Guidelines</a>
            </li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className="footer-links">
          <h4 className="footer-heading">Support</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UniStay. All rights reserved.</p>
      </div>
    </footer>
  );
}
