import React from 'react';
import { Link } from 'react-router-dom';
import Completed from './assets/completed.png'; // Corrected import path

function Confirmation() {
  return (
    <div className="confirmation">
      <div className="confirmation-card">
        <h1 className="confirmation-title">Thank you for your order!</h1>
        <p className="confirmation-message">
          Your order is being processed and will be delivered soon.
        </p>
        <img 
          src={Completed} // Use the imported image
          alt="Order Confirmation" 
          className="confirmation-image" 
        />
        <div className="order-details">
          <h2>Order Details:</h2>
          <ul>
            <li>Order Number: #123456</li>
            <li>Items Ordered: 3</li>
            <li>Total Amount: $59.99</li>
          </ul>
        </div>
        <Link to="/shop"> {/* Use Link for navigation */}
          <button className="shop-more-button">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
