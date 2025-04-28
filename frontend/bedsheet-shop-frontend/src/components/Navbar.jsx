import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Import CartContext

function Navbar() {
  const { cartItems } = useContext(CartContext);  // Access cart from context

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Bedsheet Shop 🛍️</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          Cart 🛒 ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '15px 30px',
    backgroundColor: '#ff7f50', // **Coral color (orange-pink)**
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solidrgb(86, 67, 92)', // Slight darker border
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
  },
  logo: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white', // White text for logo
  },
  links: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    textDecoration: 'none',
    color: 'white', // White links
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s',
  }
};

export default Navbar;
