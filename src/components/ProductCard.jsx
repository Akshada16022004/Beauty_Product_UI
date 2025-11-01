import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Image, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, cartItems } = useCart();

  // Check if product is already in cart
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    setAddedToCart(true);
    
    // Show success state temporarily
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Fallback placeholder component
  const ImagePlaceholder = () => (
    <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center rounded-lg">
      <Image className="h-12 w-12 text-white opacity-50" />
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1 bg-pink-500 text-white text-sm font-medium rounded-full">
          {product.category}
        </span>
      </div>
    </div>
  );

  // Add to Cart Button Component
  const AddToCartButton = ({ size = 'default' }) => {
    const buttonClass = size === 'large' 
      ? "flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
      : "flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium";

    if (addedToCart) {
      return (
        <button className={`${buttonClass} bg-green-500 from-green-500 to-green-600`}>
          <Check className="h-4 w-4" />
          <span>Added!</span>
        </button>
      );
    }

    if (isInCart) {
      return (
        <button className={`${buttonClass} bg-purple-500 from-purple-500 to-purple-600`}>
          <Check className="h-4 w-4" />
          <span>In Cart</span>
        </button>
      );
    }

    return (
      <button 
        onClick={handleAddToCart}
        className={buttonClass}
      >
        <ShoppingCart className="h-4 w-4" />
        <span>Add to Cart</span>
      </button>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-6">
          {/* Product Image */}
          <div className="flex-shrink-0">
            {imageError ? (
              <ImagePlaceholder />
            ) : (
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-xl"
                  onLoad={() => setImageLoading(false)}
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      New
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating || '4.5'}</span>
                  </div>
                  {product.isNew && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>
              <button className="p-2 bg-white border border-pink-200 rounded-full hover:bg-pink-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-pink-600">${product.price}</span>
              <div className="flex items-center space-x-3">
                <Link
                  to={`/product/${product.id}`}
                  className="text-pink-500 hover:text-pink-600 font-medium px-4 py-2 border border-pink-300 rounded-full hover:bg-pink-50 transition-colors"
                >
                  View Details
                </Link>
                <AddToCartButton size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        {imageError ? (
          <ImagePlaceholder />
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageError(true)}
              loading="lazy"
            />
            <div className="absolute top-4 right-4">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-pink-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </button>
            </div>
            {product.isNew && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                  New
                </span>
              </div>
            )}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-pink-500 text-white text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating || '4.5'}</span>
          </div>
        </div>

        <p className="text-2xl font-bold text-pink-600 mb-4">${product.price}</p>

        <div className="flex items-center justify-between">
       
        
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;