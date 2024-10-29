import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function OrderNow() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Full product data
  const productData = {
    1: { id: 1, name: "Smartphone", price: 699.99, category: "Mobile", description: "Latest smartphone with advanced features" },
    2: { id: 2, name: "Tablet", price: 399.99, category: "Mobile", description: "Portable tablet with high performance" },
    3: { id: 3, name: "Smartwatch", price: 199.99, category: "Wearables", description: "Stylish smartwatch with health tracking" },
    4: { id: 4, name: "Wireless Earphones", price: 149.99, category: "Audio", description: "Bluetooth earphones with great sound" },
    5: { id: 5, name: "Laptop", price: 999.99, category: "Computers", description: "Powerful laptop for work and play" },
    6: { id: 6, name: "Portable Charger", price: 49.99, category: "Accessories", description: "High-capacity portable charger" },
  };

  useEffect(() => {
    const fetchedProduct = productData[productId];
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    } else {
      navigate('/404');
    }
  }, [productId, navigate]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value, 10)));
  };

  const handleAddToCart = () => {
    const newItem = { ...product, quantity };
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleOrderNow = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      navigate('/checkout');
    }, 3000);
  };

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="order-now-page">
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)} per piece</p>
        <div className="order-controls">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p className="total-price">Total: ${(product.price * quantity).toFixed(2)}</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
          <button onClick={handleOrderNow} className="order-now-btn">
            Order Now
          </button>
        </div>
      </div>
      {orderPlaced && (
        <div className="order-confirmation">
          <p>You've ordered {quantity} {product.name}(s)!</p>
          <p>Redirecting to checkout page...</p>
        </div>
      )}
    </div>
  );
}

export default OrderNow;
