import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // React Icons

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    const user = { id: "1", name: email.split("@")[0], email, userType: "buyer" };
    await login(user);
    navigate("/dashboard");
  };

  const handleSocialLogin = (platform) => {
    alert(`Login with ${platform} clicked!`);
    // Integrate OAuth here later
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left Side with Image & Stickers */}
        <div className="signin-side">
          <img
            className="bg-image"
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="Farm Fresh"
          />
          <div className="stickers">
            <div className="sticker">🌱 Fresh</div>
            <div className="sticker">🍎 Organic</div>
            <div className="sticker">🚜 Local</div>
          </div>
          <div className="description">
            <h2>AgriMarket</h2>
            <p>Get fresh produce directly from local farmers. Support small farms and enjoy organic products delivered to your doorstep.</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="signin-form">
          <h2>Sign In</h2>
          {error && <p className="error">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-primary" onClick={handleLogin}>Login</button>

          {/* Social Login */}
          <div className="social-login">
            <p>Or sign in with</p>
            <div className="social-buttons">
              <button className="btn-google" onClick={() => handleSocialLogin("Google")}><FaGoogle size={20} /></button>
              <button className="btn-facebook" onClick={() => handleSocialLogin("Facebook")}><FaFacebookF size={20} /></button>
              <button className="btn-whatsapp" onClick={() => handleSocialLogin("WhatsApp")}><FaWhatsapp size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
