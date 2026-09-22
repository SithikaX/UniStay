// src/pages/UniversityListPage.jsx
import React, { useState } from "react";
import "./UniversityListPage.css";

// Sample universities list in Sri Lanka relevant for students/professionals
const universities = [
  {
    id: 1,
    name: "SLIIT (Malabe Campus)",
    city: "Malabe",
    propertiesCount: 14,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
  },
  {
    id: 2,
    name: "University of Colombo",
    city: "Colombo 03",
    propertiesCount: 22,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
  },
  {
    id: 3,
    name: "University of Moratuwa",
    city: "Moratuwa",
    propertiesCount: 18,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800",
  },
  {
    id: 4,
    name: "NSBM Green University",
    city: "Homagama",
    propertiesCount: 9,
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d57ffa6?q=80&w=800",
  },
  {
    id: 5,
    name: "APIIT Sri Lanka",
    city: "Colombo 02",
    propertiesCount: 12,
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800",
  },
  {
    id: 6,
    name: "University of Kelaniya",
    city: "Kelaniya",
    propertiesCount: 16,
    image:
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800",
  },
];

export default function UniversityListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUniversities = universities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="uni-page">
      <div className="uni-header">
        <h1>Explore Universities & Campuses</h1>
        <p>
          Find safe and affordable student housing near your university hub.
        </p>

        <div className="uni-search-box">
          <input
            type="text"
            placeholder="Search by university name or city (e.g. SLIIT, Colombo)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="uni-container">
        <div className="uni-grid">
          {filteredUniversities.length === 0 ? (
            <p className="no-results">
              No universities found matching your search.
            </p>
          ) : (
            filteredUniversities.map((uni) => (
              <div key={uni.id} className="uni-card">
                <div
                  className="uni-card-image"
                  style={{ backgroundImage: `url(${uni.image})` }}
                >
                  <span className="uni-badge">
                    {uni.propertiesCount} Properties
                  </span>
                </div>
                <div className="uni-card-content">
                  <h3>{uni.name}</h3>
                  <p className="uni-city">📍 {uni.city}</p>
                  <button
                    className="browse-btn"
                    onClick={() =>
                      alert(`Filtering properties for ${uni.name}`)
                    }
                  >
                    View Nearby Housing
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
