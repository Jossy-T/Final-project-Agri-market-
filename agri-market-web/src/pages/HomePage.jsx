import React from "react";
import { Link } from "react-router-dom";
import { Search, Users, ShieldCheck, TrendingUp, Leaf, Apple, Wheat } from "lucide-react";
import "./App.css";

const HomePage = () => {
  const features = [
    {
      icon: <Users className="icon" />,
      title: "Direct Connection",
      description: "Connect farmers directly with clients, eliminating middlemen"
    },
    {
      icon: <ShieldCheck className="icon" />,
      title: "Transparent Pricing",
      description: "Fair and transparent pricing for both farmers and clients"
    },
    {
      icon: <TrendingUp className="icon" />,
      title: "Better Income",
      description: "Farmers earn better income through direct sales"
    }
  ];

  const categories = [
    { name: "Vegetables", icon: <Leaf className="cat-icon" />, count: "150+ products" },
    { name: "Fruits", icon: <Apple className="cat-icon" />, count: "200+ products" },
    { name: "Grains", icon: <Wheat className="cat-icon" />, count: "80+ products" }
  ];

  return (
    <div className="homepage fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connecting Farmers & Clients Directly</h1>
          <p>Fresh produce, fair prices, transparent transactions</p>

          <div className="search-bar">
            <Search className="search-icon" />
            <input type="text" placeholder="Search for fresh produce..." />
          </div>

          <div className="cta-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/register" className="btn-outline">Become a Farmer</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <Link key={i} to="/products" className="category-card">
              <div>{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose AgriMarket?</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          <div><h3>500+</h3><p>Active Farmers</p></div>
          <div><h3>2000+</h3><p>Happy Clients</p></div>
          <div><h3>10k+</h3><p>Products Sold</p></div>
          <div><h3>50+</h3><p>Cities Covered</p></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
