import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './assets/backgroundImg.png';
import gadgetImage from './assets/smartGadget.png';
import smartphone from './assets/smartphone.png';
import cooler from './assets/cooler.png';
import ProductCard from './ProductCard';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      image: gadgetImage,
      name: "Smart Gadget",
      description: "Innovative tech for everyday convenience.",
      price: 49.99,
    },
    {
      id: 1,
      image: smartphone,
      name: "Smart Phone",
      description: "Stay connected with the latest technology.",
      price: 79.99,
    },
    {
      id: 3,
      image: cooler,
      name: "Mobile Phone Cooler",
      description: "Keep your device cool during intensive use.",
      price: 29.99,
    },
  ];

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Welcome to MobileSphere</h1>
          <p>Your ultimate destination for mobile tech.</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section className="about-preview">
        <h2>About MobileSphere</h2>
        <p>At MobileSphere, we curate the best mobile products to elevate your experience. Explore our top brands and exclusive offers.</p>
        <Link to="/about" className="learn-more-button">Discover More</Link>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"MobileSphere has changed the way I shop for tech!"</p>
            <span>- Alex J.</span>
          </div>
          <div className="testimonial">
            <p>"Fast shipping and great quality. Highly recommended!"</p>
            <span>- Maria K.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
