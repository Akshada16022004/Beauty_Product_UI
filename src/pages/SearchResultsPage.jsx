import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ArrowLeft, Grid, List, Check, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  
  const { addToCart, cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [addedToCart, setAddedToCart] = useState({});

  // Sample product data - replace with your actual data
  const sampleProducts = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 49.99,
      image: "/faceserum.jpg",
      category: "Skincare",
      description: "Deep hydration with natural ingredients for glowing skin",
      rating: 4.8,
      reviewCount: 128,
      inStock: true
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 34.99,
      image: "/mattelip.webp",
      category: "Makeup",
      description: "Long-lasting matte finish in 6 beautiful shades",
      rating: 4.9,
      reviewCount: 256,
      inStock: true
    },
    {
      id: 3,
      name: "Vitamin C Moisturizer",
      price: 59.99,
      image: "/skincare/vitaminC.webp",
      category: "Skincare",
      description: "Brightening cream with antioxidant protection",
      rating: 4.7,
      reviewCount: 189,
      inStock: true
    },
    {
      id: 4,
      name: "Luxury Fragrance Set",
      price: 89.99,
      image: "/fragranceing.jpg",
      category: "Fragrance",
      description: "Elegant scents for every occasion",
      rating: 4.6,
      reviewCount: 92,
      inStock: true
    },
    {
      id: 5,
      name: "Hair Repair Mask",
      price: 39.99,
      image: "/hair1.jpg",
      category: "Hair Care",
      description: "Intensive treatment for damaged hair",
      rating: 4.5,
      reviewCount: 167,
      inStock: true
    },
    {
      id: 6,
      name: "Makeup Set",
      price: 45.99,
      image: "/makeupset.jpg",
      category: "Makeup",
      description: "Professional brushes for flawless application",
      rating: 4.8,
      reviewCount: 203,
      inStock: true
    }
  ];

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setProducts(sampleProducts);
      
      if (query) {
        const filtered = sampleProducts.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(sampleProducts);
      }
      
      setLoading(false);
    }, 500);
  }, [query]);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    // Show success feedback
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const AddToCartButton = ({ product, size = 'default' }) => {
    const isAdded = addedToCart[product.id];
    const inCart = isInCart(product.id);

    const buttonClass = size === 'large' 
      ? "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
      : "w-full py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2";

    if (isAdded) {
      return (
        <button className={`${buttonClass} bg-green-500 text-white`}>
          <Check className="h-4 w-4" />
          <span>Added!</span>
        </button>
      );
    }

    if (inCart) {
      return (
        <button className={`${buttonClass} bg-purple-500 text-white`}>
          <Check className="h-4 w-4" />
          <span>In Cart</span>
        </button>
      );
    }

    return (
      <button 
        onClick={() => handleAddToCart(product)}
        className={`${buttonClass} bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105`}
      >
        <ShoppingCart className="h-4 w-4" />
        <span>Add to Cart</span>
      </button>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-purple-600 font-semibold">{product.category}</span>
        <h3 className="font-semibold text-gray-900 mt-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400 text-sm">
              {"★".repeat(5)}
            </div>
            <span className="text-xs text-gray-600">({product.reviewCount})</span>
          </div>
          <span className="text-lg font-bold text-pink-600">${product.price}</span>
        </div>
        <div className="mt-3">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 p-6">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviewCount})</span>
                </div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end space-y-3">
              <span className="text-2xl font-bold text-pink-600">${product.price}</span>
              <AddToCartButton product={product} size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-pink-50/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-pink-50/30">
      {/* Header */}
      <div className="bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <Search className="h-6 w-6 text-purple-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
                  <p className="text-gray-600">
                    {query ? (
                      <>Found <span className="text-purple-600 font-semibold">{filteredProducts.length}</span> products for "<span className="text-purple-600 font-semibold">{query}</span>"</>
                    ) : (
                      "Showing all products"
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-2xl p-1 shadow-lg border border-purple-100">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredProducts.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map(product => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )
        ) : (
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-purple-100 text-center">
            <Search className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching "<span className="font-semibold">{query}</span>"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Browse All Products
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border border-purple-200 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Try Another Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;