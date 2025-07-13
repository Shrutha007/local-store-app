import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './products.js';

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch message from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, []);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛒 Local Store App</h1>

      <h2>🔗 Backend Message:</h2>
      <p>{message}</p>

      <h2>🛍️ Products</h2>
      <Products addToCart={addToCart} />

      <h2>🧺 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
