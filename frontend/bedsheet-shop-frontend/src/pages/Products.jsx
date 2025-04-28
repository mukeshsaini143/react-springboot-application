import { useCart } from '../context/CartContext';
import React, { useState, useEffect } from 'react';

function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👇 Fetch the API URL from environment variable
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/products`)  // 👈 dynamic API URL
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [API_URL]);  // 👈 added API_URL as dependency (safe practice)

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div style={styles.productsContainer}>
      <h2>Our Bedsheets 🛏️</h2>
      <div style={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product)}
              style={styles.addToCartBtn}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  productsContainer: {
    padding: '20px',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  addToCartBtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  }
};

export default Products;
