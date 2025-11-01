import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowRight, Star, Sparkles, Share2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const WishlistPage = () => {
  const { addToCart, cartItems } = useCart();
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
    
    // Show success feedback
    setAddedItems(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== item.id));
    }, 2000);
  };

  const handleMoveAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    
    inStockItems.forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category
      });
    });

    // Show success message
    alert(`${inStockItems.length} items moved to cart!`);
    
    // Optionally remove moved items from wishlist
    // inStockItems.forEach(item => removeFromWishlist(item.id));
  };

  const shareWishlist = () => {
    const wishlistText = wishlistItems.map(item => 
      `• ${item.name} - $${item.price}`
    ).join('\n');
    
    const shareData = {
      title: 'My GlowGoddess Wishlist',
      text: `Check out my wishlist from GlowGoddess:\n${wishlistText}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareData.text);
      alert('Wishlist copied to clipboard!');
    }
  };

  const WishlistItem = ({ item }) => {
    const isAdded = addedItems.includes(item.id);
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

    return (
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/3 relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-pink-50 hover:text-pink-500 transition-all duration-300"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {item.isNew && (
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  New
                </span>
              )}
              {item.isBestSeller && (
                <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                  Bestseller
                </span>
              )}
              {!item.inStock && (
                <span className="px-2 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-2/3 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-sm text-purple-600 font-semibold mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <div className="flex text-yellow-400">
                          {"★".repeat(5)}
                        </div>
                        <span className="text-sm text-gray-600">({item.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Premium quality product designed to enhance your natural beauty and provide exceptional results.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-purple-600">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">${item.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock || isAdded || isInCart}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      !item.inStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isAdded || isInCart
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>
                      {!item.inStock 
                        ? 'Out of Stock' 
                        : isAdded 
                        ? 'Added!' 
                        : isInCart 
                        ? 'In Cart' 
                        : 'Add to Cart'
                      }
                    </span>
                  </button>
                  
                  <Link
                    to={`/product/${item.id}`}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-pink-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">MY WISHLIST</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Wishlist
                <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Saved Favourites
                </span>
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                All your favourite beauty products in one place. Never lose track of what you love.
              </p>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={shareWishlist}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Share2 className="h-5 w-5" />
                <span>Share Wishlist</span>
              </button>
              <button
                onClick={handleMoveAllToCart}
                disabled={wishlistItems.filter(item => item.inStock).length === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  wishlistItems.filter(item => item.inStock).length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Move All to Cart ({wishlistItems.filter(item => item.inStock).length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-purple-100">
                <span className="text-gray-600">Items:</span>
                <span className="font-bold text-purple-600 ml-2">{wishlistItems.length}</span>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-purple-100">
                <span className="text-gray-600">Total Value:</span>
                <span className="font-bold text-purple-600 ml-2">
                  ${wishlistItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-purple-100">
                <span className="text-gray-600">In Stock:</span>
                <span className="font-bold text-purple-600 ml-2">
                  {wishlistItems.filter(item => item.inStock).length}
                </span>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={shareWishlist}
                className="p-3 bg-white rounded-xl shadow-lg border border-purple-100 hover:bg-pink-50 transition-colors"
              >
                <Share2 className="h-5 w-5 text-purple-600" />
              </button>
              <button
                onClick={handleMoveAllToCart}
                disabled={wishlistItems.filter(item => item.inStock).length === 0}
                className="p-3 bg-white rounded-xl shadow-lg border border-purple-100 hover:bg-pink-50 transition-colors disabled:opacity-50"
              >
                <ShoppingCart className="h-5 w-5 text-purple-600" />
              </button>
            </div>
          </div>

          {/* Wishlist Items */}
          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map(item => (
                <WishlistItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            /* Empty Wishlist State */
            <div className="text-center py-16">
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-purple-100 max-w-md mx-auto">
                <Heart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600 mb-6">Start adding products you love to your wishlist!</p>
                <Link
                  to="/shop"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;