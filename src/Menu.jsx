import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import smartphone from './assets/smartphone.png';
import tablet from './assets/tablet.png';
import smartwatch from './assets/smartwatch.png';
import earphones from './assets/earphones.png';
import laptop from './assets/laptop.png';
import charger from './assets/charger.png';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = {
    1: { id: 1, name: "Smartphone XYZ", price: 699.99, category: "Mobile", description: "The ultimate smartphone experience", image: smartphone },
    2: { id: 2, name: "Tablet Pro", price: 399.99, category: "Mobile", description: "Versatile and powerful tablet", image: tablet },
    3: { id: 3, name: "Smartwatch Plus", price: 199.99, category: "Wearables", description: "Stay connected on your wrist", image: smartwatch },
    4: { id: 4, name: "Wireless Earphones", price: 149.99, category: "Audio", description: "Experience true wireless freedom", image: earphones },
    5: { id: 5, name: "Laptop Ultra", price: 999.99, category: "Computers", description: "Powerful performance on the go", image: laptop },
    6: { id: 6, name: "Portable Charger", price: 49.99, category: "Accessories", description: "Keep your devices charged anywhere", image: charger },
  };

  const filteredItems = selectedCategory === 'All'
    ? Object.values(menuItems) // Convert the object to an array
    : Object.values(menuItems).filter(item => item.category === selectedCategory);

  return (
    <div className="menu">
      <h1>MobileSphere Menu</h1>
      
      {/* Category Selector */}
      <div className="menu-categories">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'Mobile' ? 'active' : ''}
          onClick={() => setSelectedCategory('Mobile')}
        >
          Mobile
        </button>
        <button
          className={selectedCategory === 'Wearables' ? 'active' : ''}
          onClick={() => setSelectedCategory('Wearables')}
        >
          Wearables
        </button>
        <button
          className={selectedCategory === 'Audio' ? 'active' : ''}
          onClick={() => setSelectedCategory('Audio')}
        >
          Audio
        </button>
        <button
          className={selectedCategory === 'Computers' ? 'active' : ''}
          onClick={() => setSelectedCategory('Computers')}
        >
          Computers
        </button>
        <button
          className={selectedCategory === 'Accessories' ? 'active' : ''}
          onClick={() => setSelectedCategory('Accessories')}
        >
          Accessories
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
