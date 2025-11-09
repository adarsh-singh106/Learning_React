// Cart.jsx
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
