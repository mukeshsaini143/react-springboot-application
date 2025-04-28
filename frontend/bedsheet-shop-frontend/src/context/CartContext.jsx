import { createContext, useState, useContext } from 'react';

// Create a Context
export const CartContext = createContext();  // Make sure this is named export

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);  // State for cart items

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);  // Add item to cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);  // Hook to access the CartContext
}
