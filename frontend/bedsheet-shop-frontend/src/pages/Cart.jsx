import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div>Your cart is empty 🛒</div>;
  }

  return (
    <div style={styles.cartContainer}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.cartItem}>
            {item.name} - ${item.price.toFixed(2)}
            <button 
              onClick={() => removeFromCart(item.id)}  // Remove item from cart
              style={styles.removeBtn}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  cartContainer: {
    padding: '20px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  removeBtn: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Cart;
