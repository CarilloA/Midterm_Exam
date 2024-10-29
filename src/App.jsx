import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import Menu from './Menu';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import BakeLogo from './assets/bakeLogo.png';
import OrderNow from './OrderNow.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import ProductDescription from './ProductDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        const itemCount = cartItems .reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(itemCount);
      }
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <BrowserRouter>
      <header className="main-header">
        <div className="header-content">
          <NavLink to="/" className="logo-link">
            MobileSphere
          </NavLink>
          <button className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" onClick={toggleMenu}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" onClick={toggleMenu} className="shop-now-link">
                  <FontAwesomeIcon icon={faShoppingBag} /> Shop Now
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="cart-icon" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/order/:productId" element={<OrderNow />} />
  <Route path="/product/:productId" element={<ProductDescription />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/confirmation" element={<Confirmation />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;