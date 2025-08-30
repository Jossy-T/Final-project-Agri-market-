import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock top products for Home page
const topProducts = [
  { id: 1, name: "Tomato", price: 2.5, image: "http://wallsdesk.com/wp-content/uploads/2017/01/Tomato-full-HD.jpg" },
  { id: 2, name: "Banana", price: 2.0, image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1FZ3wT.img?w=768&h=502&m=6" },
  { id: 3, name: "Apple", price: 3.0, image: "https://cdn.stocksnap.io/img-thumbs/960w/fresh-apple_KNCHMWUOR0.jpg" },
  { id: 4, name: "Carrot", price: 2.0, image: "https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/" },
];

const categories = ["Vegetables", "Fruits", "Herbs", "Grains"];

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleGetStarted = () => {
    navigate("/auth");
  };

  const handleExploreProducts = () => {
    navigate("/products");
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    navigate("/products");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Fresh <span className="highlight">Produce</span>, Direct from <span className="highlight">Farmers</span>
          </h1>
          <p className="hero-subtitle">
            Shop seasonal and organic products, support local farmers, and get fresh produce delivered to your door.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started →
            </button>
            <button className="btn btn-outline" onClick={handleExploreProducts}>
              Explore Products
            </button>
          </div>
          <div className="stats-container">
            <div className="stat">
              <p className="stat-number">500+</p>
              <p className="stat-label">Active Farmers</p>
            </div>
            <div className="stat">
              <p className="stat-number">2K+</p>
              <p className="stat-label">Happy Buyers</p>
            </div>
            <div className="stat">
              <p className="stat-number">10K+</p>
              <p className="stat-label">Orders Delivered</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1622385161916-27f0c8746f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="AgriMarket Hero"
          />
        </div>
      </section>


      {/* Top Products */}
      <section className="top-products">
        <h2 className="section-title">Top Products</h2>
        <div className="products-grid">
          {topProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={handleExploreProducts}>
          View All Products →
        </button>
      </section>
    </div>
  );
};

export default Home;
