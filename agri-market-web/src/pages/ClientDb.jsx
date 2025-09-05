import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ClientDb() {
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

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const buyProducts = () => {
    setOrders([...orders, ...cart]);
    setCart([]);
  };

  return (
    <div>
      <h2>Client Dashboard</h2>
      <p>Welcome, {user.name}</p>

      <h3>Available Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} - {p.quantity} pcs
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart</h3>
      <ul>
        {cart.map((c) => (
          <li key={c.id}>{c.name} - ${c.price} - {c.quantity} pcs</li>
        ))}
      </ul>
      {cart.length > 0 && <button onClick={buyProducts}>Buy Now</button>}

      <h3>Orders</h3>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>{o.name} - ${o.price} - {o.quantity} pcs</li>
        ))}
      </ul>
    </div>
  );
}
