// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save user info in browser local storage for session management
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(`Welcome back, ${data.user.firstName}!`);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Log in to access your UniStay dashboard.</p>
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account yet?{" "}
          <Link to="/signup" className="auth-link">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
