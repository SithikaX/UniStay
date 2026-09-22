// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignupPage() {
  const [role, setRole] = useState("seeker");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, ...formData }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Account created successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create an Account</h1>
          <p>Join UniStay to find or list your perfect space.</p>
        </div>

        {error && (
          <p
            style={{
              color: "#ef4444",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <div className="role-selector">
          <button
            type="button"
            className={`role-btn ${role === "seeker" ? "active" : ""}`}
            onClick={() => setRole("seeker")}
          >
            <span className="role-icon">🎓</span>
            <span>I'm looking for a place</span>
          </button>
          <button
            type="button"
            className={`role-btn ${role === "owner" ? "active" : ""}`}
            onClick={() => setRole("owner")}
          >
            <span className="role-icon">🏠</span>
            <span>I want to list property</span>
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              minLength="6"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {role === "seeker" ? "Sign Up as Seeker" : "Sign Up as Owner"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}
