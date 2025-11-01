import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(['Lipstick', 'Face Serum', 'Moisturizer']);
  const [popularSearches] = useState(['Skincare', 'Makeup', 'Fragrance', 'Hair Care']);
  
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Sample products data - replace with your actual products
  const sampleProducts = [
    { id: 1, name: "Hydrating Face Serum", category: "Skincare", price: 49.99 },
    { id: 2, name: "Matte Lipstick Set", category: "Makeup", price: 34.99 },
    { id: 3, name: "Vitamin C Moisturizer", category: "Skincare", price: 59.99 },
    { id: 4, name: "Luxury Fragrance", category: "Fragrance", price: 89.99 },
    { id: 5, name: "Hair Repair Mask", category: "Hair Care", price: 39.99 },
    { id: 6, name: "Makeup Brush Set", category: "Makeup", price: 45.99 },
    { id: 7, name: "Face Sunscreen", category: "Skincare", price: 29.99 },
    { id: 8, name: "Lip Gloss", category: "Makeup", price: 19.99 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)]);
      }
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleQuickSearch = (term) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleProductSearch = (productName) => {
    navigate(`/search?q=${encodeURIComponent(productName)}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const removeRecentSearch = (term, e) => {
    e.stopPropagation();
    setRecentSearches(prev => prev.filter(item => item !== term));
  };

  // Filter products based on search query
  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter popular searches based on query
  const filteredPopularSearches = popularSearches.filter(term =>
    term.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <button 
        onClick={() => setSearchOpen(!searchOpen)}
        className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 hover:bg-pink-50 rounded-full"
      >
        <Search className="h-5 w-5" />
      </button>

      {searchOpen && (
        <div className="fixed top-20 right-4 w-96 bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden z-50">
          <div className="p-4 border-b border-purple-50">
            <form onSubmit={handleSearch} className="flex items-center space-x-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                className="flex-1 border-0 focus:ring-0 text-gray-800 placeholder-gray-400 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {searchQuery ? (
              <div className="p-4">
                {/* Product Results */}
                {filteredProducts.length > 0 && (
                  <>
                    <div className="text-sm font-medium text-gray-600 mb-3">
                      Products ({filteredProducts.length})
                    </div>
                    <div className="space-y-2 mb-4">
                      {filteredProducts.slice(0, 3).map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductSearch(product.name)}
                          className="w-full text-left p-3 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-semibold text-purple-600">
                                {product.category.charAt(0)}
                              </span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="text-xs text-gray-500 flex items-center space-x-2">
                                <span>{product.category}</span>
                                <span>•</span>
                                <span className="text-pink-600 font-semibold">${product.price}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Category Results */}
                {filteredPopularSearches.length > 0 && (
                  <>
                    <div className="text-sm font-medium text-gray-600 mb-3">
                      Categories
                    </div>
                    <div className="space-y-2">
                      {filteredPopularSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSearch(term)}
                          className="w-full text-left p-3 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{term}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* No Results */}
                {filteredProducts.length === 0 && filteredPopularSearches.length === 0 && (
                  <div className="text-center py-4">
                    <Search className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">No results found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
                  </div>
                )}
              </div>
            ) : (
              // Default view when no search query
              <>
                {recentSearches.length > 0 && (
                  <div className="p-4 border-b border-purple-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Recent Searches</span>
                      </div>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="space-y-2">
                      {recentSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSearch(term)}
                          className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{term}</span>
                          </div>
                          <button
                            onClick={(e) => removeRecentSearch(term, e)}
                            className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-all"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 mb-3">
                    <TrendingUp className="h-4 w-4" />
                    <span>Popular Categories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(term)}
                        className="inline-flex items-center px-3 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-800 transition-all duration-300 group"
                      >
                        <span>{term}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Product Suggestions */}
                <div className="p-4 border-t border-purple-50 bg-purple-50/50">
                  <div className="text-sm font-medium text-gray-600 mb-3">
                    Popular Products
                  </div>
                  <div className="space-y-2">
                    {sampleProducts.slice(0, 3).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductSearch(product.name)}
                        className="w-full text-left p-2 text-sm text-gray-700 hover:bg-white rounded-lg transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                            <span className="text-xs font-semibold text-purple-600">
                              {product.category.charAt(0)}
                            </span>
                          </div>
                          <span>{product.name}</span>
                        </div>
                        <span className="text-xs text-pink-600 font-semibold">${product.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {searchQuery && filteredProducts.length > 0 && (
            <div className="p-4 border-t border-purple-50 bg-white">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>View all {filteredProducts.length} results</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;