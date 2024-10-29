import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { //4b542c88-6bc7-482f-ace9-5ba13dbcc74e 2aef2153-bde5-4a37-bdc3-d88a10cdb9d8
      access_key: '4b542c88-6bc7-482f-ace9-5ba13dbcc74e', // Replace with your access key
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      cartItems: JSON.stringify(cartItems), // Convert cart items to a string
      totalPrice,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Your order has been submitted successfully!",
          icon: "success",
        });
        navigate('/confirmation'); // Redirect to confirmation page
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error('Error sending checkout details:', error);
      Swal.fire({
        title: "Error",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Payment Details</h2>

          <div className="form-section">
            <h3><FontAwesomeIcon icon={faUser} /> Personal Information</h3>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3><FontAwesomeIcon icon={faCreditCard} /> Payment Information</h3>
            <div className="form-group">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="checkout-submit-btn">
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
