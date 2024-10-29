import React from 'react';
import cakeSec from './assets/chocolate-cake.jpg';

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Sweet Bakery</h1>
        <div className="parallax-container">
          <img src={cakeSec} alt="Our Bakery" className="about-image parallax" />
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          At Sweet Bakery, we bring the finest baked goods to our customers, using only the freshest ingredients.
          Our journey began in 2005 with a passion for creating mouth-watering pastries, cakes, and breads that
          leave a lasting impression. Over the years, we have grown into a beloved local bakery with a loyal
          following.
        </p>
        <p>
          From classic favorites like croissants and sourdough to custom-designed cakes for special occasions,
          we pride ourselves on delivering the best flavors and textures with every bite.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The best cakes in town! Always fresh and delicious."</p>
          <p>- Hindi ko Alam</p>
        </div>
        <div className="testimonial">
          <p>"I can't start my day without their amazing coffee and croissants!"</p>
          <p>- Binenta Lang Ako</p>
        </div>
      </section>
    </div>
  );
}

export default About;