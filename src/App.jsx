
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './data/products.json'; // Adjust the path if necessary
import './App.css';

const App = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);


  return (
    <div className="app-container">
      <header>
        <h1>My Cart ({totalQuantity})</h1>
      </header>
      <main className="main-content">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </main>
    </div>
  );
};

export default App;
