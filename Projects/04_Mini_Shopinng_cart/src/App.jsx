// App.jsx
import React, { useState } from 'react';
import Container from './Components/Container';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { name: 'Dal', price: 80 },
    { name: 'Apples', price: 120 },
    { name: 'Seeds', price: 60 }
  ];

  function handleAddToCart(product) {
    setCart([...cart, product]); // ✅ event handling updates state
  }

  return (
    <Container>
      <h1>Healthy Food Store</h1>
      <ProductList products={products} onAdd={handleAddToCart} />
      <Cart cartItems={cart} />
    </Container>
  );
};

export default App;
