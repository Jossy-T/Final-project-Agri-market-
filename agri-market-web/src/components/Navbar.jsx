import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">🌱 AgriMarket</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Products">Products</Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button className="btn btn-outline" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="header-registration-form-btn">Sign In</Link>
            <Link to="/register" className="header-registration-form-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
