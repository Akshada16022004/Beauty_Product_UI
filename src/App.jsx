import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import History from './pages/History';
//import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import './index.css';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import FAQ from './pages/FAQ';
import CollectionsPage from './pages/CollectionsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';


function App() {
   
  return (
    <CartProvider>
      <WishlistProvider>
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/profile" element={<ProfilePage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </WishlistProvider>
     </CartProvider>
  );
}

export default App;