import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>456 Tech Lane, Silicon Valley, CA 94043</p>
          <p>Phone: (555) 987-6543</p>
          <p>Email: support@mobilesphere.com</p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="/support">Support</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MobileSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
