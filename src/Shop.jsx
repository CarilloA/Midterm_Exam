import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import smartphone from './assets/smartphone.png';
import tablet from './assets/tablet.png';
import smartwatch from './assets/smartwatch.png';
import earphones from './assets/wirelessEarphone.png';
import laptop from './assets/laptop.png';
import charger from './assets/charger.png';

function Shop() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [category, setCategory] = useState('All');

  // Simulated product data (in a real app, this would come from an API or database)
  const productData = [
    { id: 1, name: "Smartphone", price: 699.99, category: "Mobile", image: smartphone },
    { id: 2, name: "Tablet", price: 399.99, category: "Mobile", image: tablet },
    { id: 3, name: "Smartwatch", price: 199.99, category: "Wearables", image: smartwatch },
    { id: 4, name: "Wireless Earphones", price: 149.99, category: "Audio", image: earphones },
    { id: 5, name: "Laptop", price: 999.99, category: "Computers", image: laptop },
    { id: 6, name: "Portable Charger", price: 49.99, category: "Accessories", image: charger },
  ];

  useEffect(() => {
    setProducts(productData);
  }, []);

  const handleSort = (e) => {
    setSortBy(e.target.value);
    const sortedProducts = [...products].sort((a, b) => {
      if (e.target.value === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setProducts(sortedProducts);
  };

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
    if (e.target.value === 'All') {
      setProducts(productData);
    } else {
      const filteredProducts = productData.filter(product => product.category === e.target.value);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="shop">
      <h1>Welcome to MobileSphere</h1>
      <div className="shop-controls">
        <select onChange={handleSort} value={sortBy}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <select onChange={handleCategoryFilter} value={category}>
          <option value="All">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Wearables">Wearables</option>
          <option value="Audio">Audio</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={`Price: $${product.price}`} // Description can be adjusted as needed
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
