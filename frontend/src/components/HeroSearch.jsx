// src/components/HeroSearch.jsx
import { useState } from "react";
import "./HeroSearch.css";

export default function HeroSearch() {
  const [searchMode, setSearchMode] = useState("university");

  return (
    <div className="hero-container">
      <div
        className="hero-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')",
        }}
      ></div>

      <div className="hero-content">
        <h1 className="hero-title">Your Journey, Your Stay.</h1>
        <p className="hero-subtitle">
          Find a Perfect Annex or Apartment near University or Work.
        </p>

        <div className="search-box">
          <div className="search-tabs">
            <button
              onClick={() => setSearchMode("university")}
              className={`tab-btn ${searchMode === "university" ? "active" : ""}`}
            >
              [ SEARCH BY UNIVERSITY ]
            </button>
            <button
              onClick={() => setSearchMode("city")}
              className={`tab-btn ${searchMode === "city" ? "active" : ""}`}
            >
              [ SEARCH BY CITY / WORKSPACE ]
            </button>
          </div>

          <div className="search-input-area">
            <input
              type="text"
              placeholder={
                searchMode === "university"
                  ? "Enter University Name (e.g., SLIIT, University of Colombo)..."
                  : "Enter City, Workspace (e.g., Hokandara, Colombo 03)..."
              }
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-btn orange-btn">🔍 FIND AN ANNEX</button>
          <button className="cta-btn green-btn">🏠 LIST YOUR PROPERTY</button>
        </div>
      </div>
    </div>
  );
}
