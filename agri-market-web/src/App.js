<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
=======
<<<<<<< HEAD
import  { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FarmerDashboard from './pages/FarmerDashboard'
import ClientDashboard from './pages/ClientDashboard'
import "./App.css"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Order from './pages/Order'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received for Organic Tomatoes", time: "2 hours ago", read: false },
    { id: 2, message: "Your order has been confirmed", time: "1 day ago", read: true }
  ])

=======
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FarmerDashboard from './pages/FarmerDashboard'
import ClientDashboard from './pages/ClientDashboard'
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import "./App.css"

function App() {
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received for Organic Tomatoes", time: "2 hours ago", read: false },
    { id: 2, message: "Your order has been confirmed", time: "1 day ago", read: true }
  ])

>>>>>>> 4850fbe497d9ee32cf7c78f4d335c72d89c8fa2f
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} notifications={notifications} />
        <main className="pt-16">
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard user={user} />} />
            <Route path="/client-dashboard" element={<ClientDashboard user={user} />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/about" element={<About />} />
=======
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage setUser={setUser} />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard user={user} />} />
            <Route path="/client-dashboard" element={<ClientDashboard user={user} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/about" element={<AboutPage />} />
>>>>>>> 4850fbe497d9ee32cf7c78f4d335c72d89c8fa2f
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
<<<<<<< HEAD
}
=======
}

export default App
>>>>>>> 4850fbe497d9ee32cf7c78f4d335c72d89c8fa2f
>>>>>>> 8dff068e848251aad10df65277e8298a5686b398
