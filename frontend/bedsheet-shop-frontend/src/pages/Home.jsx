import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your real API URL
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to Bedsheet Shop 🛍️</h1>
        <p style={styles.heroSubtitle}>Explore our beautiful collection of bedsheets and pillow covers!</p>
      </section>

      {/* Products Section */}
      <section id="products" style={styles.productsSection}>
        <h2>Our Products</h2>
        <div style={styles.productsGrid}>
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} style={styles.productCard}>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  style={styles.productImage} 
                />
                <h3>{product.name}</h3>
                <p>{product.price} ₹</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Bedsheet Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f9f9f9' },
  heroSection: { textAlign: 'center', padding: '50px 20px', backgroundColor: '#fff' },
  heroTitle: { fontSize: '36px', marginBottom: '10px' },
  heroSubtitle: { fontSize: '20px', marginBottom: '20px' },
  productsSection: { padding: '40px 20px', backgroundColor: '#f1f1f1', textAlign: 'center' },
  productsGrid: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' },
  productCard: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  productImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' },
  footer: { textAlign: 'center', padding: '20px', backgroundColor: '#ff7f50', color: 'white', marginTop: '30px' }
};

export default Home;
