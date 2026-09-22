// src/pages/ContactPage.jsx
import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about finding an annex or listing your property? Our
            team is here to help.
          </p>

          <div className="info-block">
            <h3>📍 Location</h3>
            <p>Hokandara, Western Province, Sri Lanka</p>
          </div>

          <div className="info-block">
            <h3>✉️ Email</h3>
            <p>support@unistay.lk</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>+94 77 123 4567</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
