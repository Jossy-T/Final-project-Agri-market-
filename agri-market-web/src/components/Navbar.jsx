import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Left: Logo + Title */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img
            src="https://via.placeholder.com/40x40?text=🌱"
            alt="AgriMarket Logo"
            className="logo-img"
          />
          <span className="title">AgriMarket</span>
        </Link>
      </div>

      {/* Right: Nav Links + Auth Buttons */}
      <div className="navbar-right">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>

        <div className="auth-buttons">
          {user ? (
            <>
              <span className="greeting">Hello, {user.name}</span>
              <button className="btn btn-outline" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-primary">Sign In</Link>
              <Link to="/register" className="btn btn-outline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
