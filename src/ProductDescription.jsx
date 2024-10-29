import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import smartphone from './assets/smartphone.png';
import tablet from './assets/tablet.png';
import smartwatch from './assets/smartwatch.png';
import earphones from './assets/wirelessEarphone.png';
import laptop from './assets/laptop.png';
import charger from './assets/charger.png';

function ProductDescription() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // Simulated mobile product data with imported images
  const productData = {
    1: {
      id: 1,
      name: "Smartphone XYZ",
      price: 699.99,
      category: "Mobile",
      description: "The ultimate smartphone experience.",
      longDescription: "The Smartphone XYZ combines cutting-edge technology with a sleek design, featuring a stunning display and exceptional camera.",
      image: smartphone,
    },
    2: {
      id: 2,
      name: "Tablet Pro",
      price: 399.99,
      category: "Mobile",
      description: "Versatile and powerful.",
      longDescription: "The Tablet Pro offers a vibrant display, perfect for work and play.",
      image: tablet,
    },
    3: {
      id: 3,
      name: "Smartwatch Plus",
      price: 199.99,
      category: "Wearables",
      description: "Stay connected on your wrist.",
      longDescription: "The Smartwatch Plus keeps you in touch with notifications and fitness tracking.",
      image: smartwatch,
    },
    4: {
      id: 4,
      name: "Wireless Earphones",
      price: 149.99,
      category: "Audio",
      description: "Experience true wireless freedom.",
      longDescription: "Our Wireless Earphones offer crystal-clear sound quality with the convenience of Bluetooth connectivity.",
      image: earphones,
    },
    5: {
      id: 5,
      name: "Laptop Ultra",
      price: 999.99,
      category: "Computers",
      description: "Powerful performance on the go.",
      longDescription: "The Laptop Ultra features a sleek design with powerful internals, perfect for work or play.",
      image: laptop,
    },
    6: {
      id: 6,
      name: "Portable Charger",
      price: 49.99,
      category: "Accessories",
      description: "Keep your devices charged anywhere.",
      longDescription: "The Portable Charger is compact and powerful, ensuring your devices stay charged on the go.",
      image: charger,
    },
  };

  useEffect(() => {
    const fetchedProduct = productData[parseInt(productId, 10)];
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    } else {
      navigate('/404'); // Redirect to a 404 page if product not found
    }
  }, [productId, navigate]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-description">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p className="category">{product.category}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <p className="long-description">{product.longDescription}</p>
      <Link to={`/order/${product.id}`} className="order-now-button">Order Now</Link>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ProductDescription;
