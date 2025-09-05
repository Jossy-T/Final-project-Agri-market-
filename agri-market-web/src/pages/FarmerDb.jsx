import React, { useState } from "react";

export default function FarmerDb() {
   const location = useLocation();
  const { user } = location.state || {};
  
  if (!user) {
    return (
      <div className="error-page">
        <h2>Error: User data not found</h2>
        <p>Please <a href="/register">register</a> or <a href="/signin">sign in</a> first.</p>
      </div>
    );
  }

  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", price: "", quantity: "" });

  const addProduct = () => {
    if (!productForm.name || !productForm.price || !productForm.quantity) return;
    setProducts([...products, { ...productForm, id: Date.now().toString() }]);
    setProductForm({ name: "", price: "", quantity: "" });
  };

  return (
    <div className="farmer-dashboard">
      <h2>Farmer Dashboard</h2>
      <h3>Welcome, {user.name}</h3>
      <div className="profile-card">
        <p>Name: {user.name}</p>
        <p>Farm Name: {user.farmName}</p>
        <p>Location: {user.location}</p>
        <p>Phone: {user.phone}</p>
      </div>

      <h4>Add Product</h4>
      <div className="inputs">
      <input
        placeholder="Product Name"
        value={productForm.name}
        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={productForm.price}
        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={productForm.quantity}
        onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
      />
      </div>

      <div className="farmer-dashboard-btn">
      <button onClick={addProduct}>Add Product</button>
      </div>


      <h3 className="your-product">Your Products</h3>
      <div className="farmer-dashboard-productlists">
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <div className="farmer-productlists">
            product name: {p.name} <br/>
            Price: {p.price}Birr  <br/>
            quantity: {p.quantity} pcs <br/>
          </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
