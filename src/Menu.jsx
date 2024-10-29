import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import croissant from './assets/croissant.jpg';
import sourdough from './assets/sourdough.jpg';
import chocolateCake from './assets/chocolate-cake.jpg';
import blueberryMuffin from './assets/muffin.jpg';
import hotSec from './assets/hotSec.png';
import coldSec from './assets/coldSec.png';
import espresso from './assets/Espresso.jpg';  // Importing the Espresso image

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = {
    1: { id: 1, name: "Butter Croissant", price: 2.50, category: "Bread", description: "Flaky, buttery, and simply delicious", image: croissant },
    2: { id: 2, name: "Sourdough Bread", price: 6.00, category: "Bread", description: "Made with our 100-year-old starter", image: sourdough },
    3: { id: 3, name: "Chocolate Cake", price: 28.00, category: "Cake", description: "Rich, moist, and utterly indulgent", image: chocolateCake },
    4: { id: 4, name: "Blueberry Muffin", price: 3.00, category: "Cake", description: "Fresh blueberries with a hint of vanilla", image: blueberryMuffin },
    5: { id: 5, name: "Cappuccino", price: 3.50, category: "Hot Drinks", description: "Hot espresso with steamed milk", image: hotSec },
    6: { id: 6, name: "Espresso", price: 2.50, category: "Hot Drinks", description: "Strong and bold single-shot espresso", image: espresso },
    7: { id: 7, name: "Iced Coffee", price: 4.00, category: "Cold Drinks", description: "Chilled coffee with milk and ice", image: coldSec },
    8: { id: 8, name: "Iced Espresso", price: 4.00, category: "Cold Drinks", description: "Chilled coffee with milk and ice", image: espresso }
  };
 

  const filteredItems = selectedCategory === 'All'
  ? Object.values(menuItems) // Convert the object to an array
  : Object.values(menuItems).filter(item => item.category === selectedCategory);


  return (
    <div className="menu">
      <h1>Our Menu</h1>
     
      {/* Category Selector */}
      <div className="menu-categories">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'Bread' ? 'active' : ''}
          onClick={() => setSelectedCategory('Bread')}
        >
          Bread
        </button>
        <button
          className={selectedCategory === 'Cake' ? 'active' : ''}
          onClick={() => setSelectedCategory('Cake')}
        >
          Cake
        </button>
        <button
          className={selectedCategory === 'Hot Drinks' ? 'active' : ''}
          onClick={() => setSelectedCategory('Hot Drinks')}
        >
          Hot Drinks
        </button>
        <button
          className={selectedCategory === 'Cold Drinks' ? 'active' : ''}
          onClick={() => setSelectedCategory('Cold Drinks')}
        >
          Cold Drinks
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