import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faMinus, faPlus, faArrowRight, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const increaseQuantity = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    updateCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      updateCart(newCart);
    }
  };

  const removeItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        cartItems, 
        totalPrice 
      } 
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Your Shopping Cart</span>
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <FontAwesomeIcon icon={faShoppingBag} className="empty-cart-icon" />
          <p>Your cart is currently empty</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-container">
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="item-controls">
                    <button 
                      onClick={() => decreaseQuantity(index)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(index)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    onClick={() => removeItem(index)}
                    className="remove-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="cart-summary">
            <div className="summary-header">
              <h2>Order Summary</h2>
            </div>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="cart-actions">
              <button 
                onClick={clearCart} 
                className="clear-cart-btn"
              >
                <FontAwesomeIcon icon={faTrash} />
                <span>Clear Cart</span>
              </button>
              <button 
                onClick={handleCheckout}
                className="checkout-btn"
              >
                <span>Proceed to Checkout</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
