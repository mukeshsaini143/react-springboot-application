import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart'; // <-- Import Cart

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> {/* <-- Add Cart route */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
