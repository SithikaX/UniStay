// src/components/PropertyCard.jsx
import React from "react";
import "./PropertyCard.css";

export default function PropertyCard({
  image,
  title,
  price,
  beds,
  baths,
  type,
  badge,
}) {
  return (
    <div className="property-card">
      {/* Image Container with Badge */}
      <div className="property-image-wrapper">
        <img src={image} alt={title} className="property-image" />
        {badge && <span className="property-badge">{badge}</span>}
      </div>

      {/* Property Details */}
      <div className="property-content">
        <h3 className="property-title">{title}</h3>

        <div className="property-price-row">
          <span className="property-price">
            {price}
            <span className="price-period">/mo</span>
          </span>
          <span className="property-rating">★★★★★</span>
        </div>

        <div className="property-specs">
          <span className="spec-item">🛏️ {beds} Beds</span>
          <span className="spec-item">🛁 {baths} Bath</span>
          <span className="spec-type">{type}</span>
        </div>

        {/* Action Button */}
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
}
