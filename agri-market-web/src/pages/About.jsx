import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span className="highlight">AgriMarket</span></h1>
        <p>
          AgriMarket is a <strong>revolutionary platform</strong> connecting farmers directly with buyers. 
          We remove middlemen, ensure fair prices for farmers, and deliver fresh, high-quality produce straight to your doorstep.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Why Use <span className="highlight">AgriMarket</span>?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Direct Connection</h3>
            <p>Connect directly with farmers and buyers without intermediaries.</p>
          </div>
          <div className="feature-card">
            <h3>Quality Assurance</h3>
            <p>All products are verified for freshness and top quality.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Fresh produce delivered directly from farms within 24 hours.</p>
          </div>
          <div className="feature-card">
            <h3>Support Local</h3>
            <p>Empower local farmers and strengthen community livelihoods.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To transform agriculture through transparency and direct connections 
            between producers and consumers, improving both livelihoods and food quality. 
            We create a sustainable ecosystem where farmers thrive and buyers enjoy premium produce.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="about-how">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <span className="step-number">1</span>
            <h3>Register</h3>
            <p>Sign up as a farmer or buyer to start listing or ordering products.</p>
          </div>
          <div className="how-step">
            <span className="step-number">2</span>
            <h3>Browse & Order</h3>
            <p>Explore fresh produce and order directly from farmers nearby.</p>
          </div>
          <div className="how-step">
            <span className="step-number">3</span>
            <h3>Get Delivered</h3>
            <p>Receive fresh produce delivered safely to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
