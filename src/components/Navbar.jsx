import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Gem, Sparkles, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import SearchComponent from './SearchComponent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const { cartItems } = useCart();
  const { getWishlistItemsCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/collections', label: 'Collections' },
    { path: '/history', label: 'History' },
    { path: '/contact', label: 'Contact' },
    
    {path:'/shipping', label:'Shipping Information' },
    {path:'/returns', label:'Returns' },
    {path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">

          {/* Top Row - Logo and Actions */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Gem className="h-8 w-8 text-pink-500" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                GlowGoddess
              </span>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Search Component */}
              <SearchComponent />
              
              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 hover:bg-pink-50 rounded-full relative"
              >
                <Heart className="h-5 w-5" />
                {getWishlistItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {getWishlistItemsCount()}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link 
                to="/cart" 
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 hover:bg-pink-50 rounded-full relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>

              {/* User */}
              <Link 
                to="/profile" 
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 hover:bg-pink-50 rounded-full"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-gray-700 hover:text-pink-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
<div className="hidden lg:flex justify-center items-center py-3">
  <div className="flex items-center space-x-8">
    {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`font-medium transition-colors duration-300 ${
          location.pathname === link.path
            ? 'text-pink-700 border-b-2 border-pink-600'
            : 'text-gray-700 hover:text-pink-600'
        }`}
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex items-center space-x-6 mt-8">
              <Link 
                to="/wishlist" 
                onClick={() => setIsOpen(false)}
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 relative"
              >
                <Heart className="h-6 w-6" />
                {getWishlistItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                    {getWishlistItemsCount()}
                  </span>
                )}
              </Link>

              <Link 
                to="/cart" 
                onClick={() => setIsOpen(false)}
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>

              <Link 
                to="/profile" 
                onClick={() => setIsOpen(false)}
                className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 p-2 text-gray-700 hover:text-pink-500"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;