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
    1: { id: 1, name: "Butter Croissant", price: 2.50, category: "Bread", description: "Flaky, buttery, and simply delicious" },
    2: { id: 2, name: "Sourdough Bread", price: 6.00, category: "Bread", description: "Made with our 100-year-old starter" },
    3: { id: 3, name: "Chocolate Cake", price: 28.00, category: "Cake", description: "Rich, moist, and utterly indulgent" },
    4: { id: 4, name: "Blueberry Muffin", price: 3.00, category: "Cake", description: "Fresh blueberries with a hint of vanilla" },
    5: { id: 5, name: "Cappuccino", price: 3.50, category: "Hot Drinks", description: "Hot espresso with steamed milk" },
    6: { id: 6, name: "Espresso", price: 2.50, category: "Hot Drinks", description: "Strong and bold single-shot espresso" },
    7: { id: 7, name: "Iced Coffee", price: 4.00, category: "Cold Drinks", description: "Chilled coffee with milk and ice" },
    8: { id: 8, name: "Iced Espresso", price: 4.00, category: "Cold Drinks", description: "Chilled coffee with milk and ice" }
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
      navigate('/');
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
          <p>Redirecting to home page...</p>
        </div>
      )}
    </div>
  );
}

export default OrderNow;