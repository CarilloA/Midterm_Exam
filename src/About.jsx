import React from 'react'; 
import gadget from './assets/gadget.png'; // Consider replacing with a relevant mobile-themed image

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="hero-title">About MobileSphere</h1>
        <div className="parallax-container">
          <img src={gadget} alt="Our Bakery" className="about-image parallax" />
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <h2 className="content-title">Our Story</h2>
        <p>
          At MobileSphere, we are dedicated to bringing you the latest in mobile technology and accessories.
          Our journey began with a passion for innovation and quality products that enhance your daily life.
          Over the years, we have grown into a trusted source for tech enthusiasts and casual users alike.
        </p>
        <p>
          From the newest smartphones to essential accessories, we pride ourselves on offering a curated selection
          that meets the needs of every customer, ensuring the best user experience.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"MobileSphere has the best selection of gadgets! Always on trend!"</p>
            <p>- Tech Enthusiast</p>
          </div>
          <div className="testimonial">
            <p>"Their customer service is unmatched! I found exactly what I needed."</p>
            <p>- Satisfied Customer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
