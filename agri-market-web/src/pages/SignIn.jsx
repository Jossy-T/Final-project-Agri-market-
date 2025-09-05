// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "../App.css";

// export default function SignIn() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");
//     if (!email || !password) {
//       setError("Please fill in all fields");
//       return;
//     }
//     const user = { id: "1", name: email.split("@")[0], email, userType: "buyer" };
//     await login(user);
//     navigate("/ClientDb");
//   };

//   const handleSocialLogin = (platform) => {
//     alert(`Login with ${platform} clicked!`);
//   };

//   return (
//     <div className="signin-page">
//       <div className="signin-container">
//         {/* Left Side */}
//         <div className="signin-side">
//           <img
//             className="bg-image"
//             src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
//             alt="Farm Fresh"
//           />

//           {/* Feature Cards */}
//           <div className="features-grid">
//             <div className="feature-card">
//               <span>🛒</span>
//               <h4>Direct from Farmers</h4>
//               <p>Buy fresh produce straight from local farmers.</p>
//             </div>
//             <div className="feature-card">
//               <span>🌱</span>
//               <h4>100% Organic</h4>
//               <p>Support sustainable and healthy farming.</p>
//             </div>
//             <div className="feature-card">
//               <span>🚚</span>
//               <h4>Fast Delivery</h4>
//               <p>Get products delivered quickly to your door.</p>
//             </div>
//             <div className="feature-card">
//               <span>🌾</span>
//               <h4>Sustainable Farming</h4>
//               <p>Promote eco-friendly agricultural practices.</p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="stats">
//             <div className="stat">
//               <h3>1000+</h3>
//               <p>Farmers</p>
//             </div>
//             <div className="stat">
//               <h3>5000+</h3>
//               <p>Products</p>
//             </div>
//             <div className="stat">
//               <h3>99%</h3>
//               <p>Delivery Success</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Login Form */}
//         <div className="signin-form">
//           <h2>Sign In</h2>
//           {error && <p className="error">{error}</p>}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button className="btn-primary" onClick={handleLogin}>Login</button>

          
//             <p className="text-gray-600">
//               Don't have an account? <br/><br/>
//               <Link to="/register" className="signup-here">
//                 Sign up here
//               </Link>
//             </p>
          

//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../App.css";

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setError("");
    
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    try {
      // In a real app, this would call your authentication API
      const user = { id: "1", name: email.split("@")[0], email, userType: "buyer" };
      await login(user);
      
      // Navigate based on user type
      if (user.userType === "farmer") {
        navigate("/FarmerDb");
      } else {
        navigate("/ClientDb");
      }
    }
    //  catch (err) {
    //   setError("Invalid email or password");
    //   console.error("Login error:", err);
    // } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left Side */}
        <div className="signin-side">
          <img
            className="bg-image"
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt="Farm Fresh"
          />

          {/* Feature Cards */}
          <div className="features-grid">
            <div className="feature-card">
              <span>🛒</span>
              <h4>Direct from Farmers</h4>
              <p>Buy fresh produce straight from local farmers.</p>
            </div>
            <div className="feature-card">
              <span>🌱</span>
              <h4>100% Organic</h4>
              <p>Support sustainable and healthy farming.</p>
            </div>
            <div className="feature-card">
              <span>🚚</span>
              <h4>Fast Delivery</h4>
              <p>Get products delivered quickly to your door.</p>
            </div>
            <div className="feature-card">
              <span>🌾</span>
              <h4>Sustainable Farming</h4>
              <p>Promote eco-friendly agricultural practices.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <h3>1000+</h3>
              <p>Farmers</p>
            </div>
            <div className="stat">
              <h3>5000+</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>99%</h3>
              <p>Delivery Success</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="signin-form">
          <h2>Sign In</h2>
          {error && <p className="error">{error}</p>}
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              className="btn-primary" 
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-gray-600">
            Don't have an account? <br/><br/>
            <Link to="/register" className="signup-here">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}