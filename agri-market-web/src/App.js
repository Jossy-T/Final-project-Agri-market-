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

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} notifications={notifications} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage setUser={setUser} />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard user={user} />} />
            <Route path="/client-dashboard" element={<ClientDashboard user={user} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
