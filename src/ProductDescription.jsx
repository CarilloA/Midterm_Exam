import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ProductDescription() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  // Simulated product data (in a real app, this would come from an API or database)
  const productData = {
    1: {
      id: 1,
      name: "Butter Croissant",
      price: 2.50,
      category: "Bread",
      description: "Flaky, buttery, and simply delicious",
      longDescription: "Our butter croissants are made with the finest French butter, creating layers of flaky, buttery goodness that melts in your mouth. Each croissant is hand-rolled and baked to perfection, resulting in a golden-brown exterior and a soft, airy interior.",
    },
    2: {
      id: 2,
      name: "Sourdough Bread",
      price: 6.00,
      category: "Bread",
      description: "Made with our 100-year-old starter",
      longDescription: "Our sourdough bread is crafted using a century-old starter, giving it a unique tangy flavor and chewy texture. Each loaf is hand-shaped and slowly fermented for 24 hours, resulting in a crusty exterior and a moist, open crumb structure.",
    },
    3: {
      id: 3,
      name: "Chocolate Cake",
      price: 28.00,
      category: "Cake",
      description: "Rich, moist, and utterly indulgent",
      longDescription: "Our chocolate cake is a chocoholic's dream come true. Made with premium dark chocolate and cocoa powder, this cake is incredibly moist and rich. It's layered with silky chocolate ganache and covered in a smooth chocolate buttercream frosting.",
    },
  };

  useEffect(() => {
    const fetchedProduct = productData[productId];
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [productId]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-description">
      <h1>{product.name}</h1>
      <p className="category">{product.category}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <p className="long-description">{product.longDescription}</p>
      <Link to={`/order/${product.id}`} className="order-now-button">Order Now</Link>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
    </div>
  );
}

export default ProductDescription;