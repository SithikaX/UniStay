// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import HeroSearch from "../components/HeroSearch";
import PropertyCard from "../components/PropertyCard";

export default function HomePage() {
  // 1. Define state variables for data, loading status, and errors
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Replace this URL with your actual backend endpoint if deployed
        const response = await fetch("http://localhost:5000/api/properties");

        if (!response.ok) {
          throw new Error("Failed to fetch property data.");
        }

        const json = await response.json();

        // Assuming your backend controller returns { data: [ {id, title, ...} ] }
        setProperties(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Stop the loading spinner regardless of success or failure
      }
    };

    fetchProperties();
  }, []); // The empty array ensures this only runs once when the page loads

  return (
    <>
      <HeroSearch />

      <div className="featured-section">
        <h2>FEATURED PROPERTIES NEAR YOU</h2>

        {/* 3. Handle Loading State */}
        {isLoading && (
          <div className="loading-state">
            <p>Loading properties...</p>
          </div>
        )}

        {/* 4. Handle Error State */}
        {error && (
          <div className="error-state">
            <p>Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {/* 5. Render Data */}
        {!isLoading && !error && (
          <div className="property-grid">
            {properties.length === 0 ? (
              <p>No properties found in your area.</p>
            ) : (
              properties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  title={prop.title}
                  // Formatting raw backend data (e.g., 25000.00) into currency
                  price={`Rs. ${Number(prop.monthly_rent).toLocaleString()}`}
                  // If your DB doesn't have beds/baths yet, you can hide them or pass defaults
                  beds={prop.beds || 1}
                  baths={prop.baths || 1}
                  type={prop.property_type}
                  // Using distance as a badge for the MVP (e.g., "1.2 km away")
                  badge={
                    prop.distance_km ? `${prop.distance_km} km away` : "New"
                  }
                  // Use the primary image from the DB, or a fallback placeholder
                  image={
                    prop.primary_image ||
                    "https://via.placeholder.com/400x250?text=No+Image"
                  }
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
