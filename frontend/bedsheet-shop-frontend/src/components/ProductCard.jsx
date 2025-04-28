function ProductCard({ product }) {
    return (
      <div style={styles.card}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '16px',
    },
  };
  
  export default ProductCard;
  