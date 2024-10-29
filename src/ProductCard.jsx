import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, image, name, description, price }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price.toFixed(2)}</p>
        <div className="card-buttons">
          <Link to={`/product/${id}`} className="view-description-button order-button">View Details</Link>
          <Link to={`/order/${id}`} className="order-now-button order-button">Order Now</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
