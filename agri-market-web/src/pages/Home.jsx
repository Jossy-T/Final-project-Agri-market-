<<<<<<< HEAD
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
=======
import React from "react";
import { Link } from "react-router-dom";
import agrimage from "../image/connection.png"
import { Search, Users, ShieldCheck, TrendingUp, Leaf, Apple, Wheat } from "lucide-react";
import "../App.css";

export default function Home() {
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
          <div style={{display:"flex",gap:"200px"}}>
            <div>
              <h1 style={{fontWeight:"700",color:"#111827"}}>Connecting Farmers & Clients Directly</h1>
              <p style={{fontSize:"1.25rem",color:"#4B5563",maxWidth:"32rem"}}>Get fresh, organic produce straight from local farms. 
                Support your community while enjoying the highest quality ingredients.</p>

              <div className="search-bar">
                <Search className="search-icon" />
                <input type="text" placeholder="Search for fresh produce..." />
              </div>
            </div>

            <div>
              <img src={agrimage}  alt="logo" style={{width:"600px",height:"auto",marginBottom:"50px",borderRadius:"10px"}}/>
            </div>
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
>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
{/* <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Connecting<span class="text-primary"> Farmers </span>&amp; Clients Directly</h1>
<p class="text-xl text-gray-600 max-w-lg">Get fresh, organic produce straight from local farms. Support your community while enjoying the highest quality ingredients.</p> */}
>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
