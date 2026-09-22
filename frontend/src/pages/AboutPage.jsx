// src/pages/AboutPage.jsx
import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>ABOUT UNISTAY: OUR MISSION & PRICING</h1>
      </div>

      <div className="about-content">
        <div className="mission-section">
          <div className="mission-text">
            <h2>OUR MISSION: CONNECTING SEEKERS TO SAFE HOUSING.</h2>
            <p>
              UniStay bridges the gap for students and young professionals by
              creating a trusted platform to discover verified properties near
              universities and workplaces. We prioritize safety, community, and
              ease of use.
            </p>
            <h3>OUR PROMISE:</h3>
            <p>
              We are committed to fostering reliable connections, supporting
              local owners, and simplifying your search.
            </p>

            <div className="feature-badges">
              <span>✔️ Verified Listings</span>
              <span>🤝 Community Trust</span>
              <span>🔗 Easy Connections</span>
            </div>
          </div>
          {/* Placeholder for the illustration shown in your mockup */}
          <div className="mission-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
              alt="Students and Professionals"
            />
          </div>
        </div>

        <div className="pricing-section">
          <h2>PRICING & SPECIAL PROMOTIONS</h2>

          <div className="promo-box">
            <h3>⏳ SPECIAL LAUNCH DEMO PERIOD OFFER: OWNERS!</h3>
            <h4 className="promo-highlight">
              OUR PLATFORM SERVICE IS 100% FREE FOR ALL PROPERTY OWNERS
            </h4>
            <p>
              For the <strong>FIRST 4 FULL MONTHS</strong> of our platform
              launch (Demo Period). List your properties, build your profile,
              and receive bookings at zero cost. Join early and benefit from
              free visibility!
            </p>
            <p className="promo-disclaimer">
              *Offer expires soon! Sign up now during our launch phase.*
            </p>
          </div>

          <div className="standard-pricing">
            <h3>STANDARD OWNER PRICING MODEL (Post-Demo Period)</h3>
            <div className="pricing-tiers">
              <div className="tier">
                <h4>Basic</h4>
                <p>Free up to 3 active listings</p>
              </div>
              <div className="tier">
                <h4>Pro</h4>
                <p>Small fee per active listing for featured placement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
