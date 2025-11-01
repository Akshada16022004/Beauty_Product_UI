import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  // Sample wishlist data to start with
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 49.99,
      originalPrice: 59.99,
      image: "/skincare/faceserum.webp",
      category: "Skincare",
      rating: 4.8,
      reviewCount: 128,
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: "Matte Lipstick Set",
      price: 34.99,
      originalPrice: 39.99,
      image: "/mattelip.webp",
      category: "Makeup",
      rating: 4.9,
      reviewCount: 256,
      inStock: true,
      isBestSeller: true
    }
  ]);

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, { 
          ...product, 
          quantity: 1,
          inStock: true,
          rating: 4.5,
          reviewCount: 100
        }];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const getWishlistItemsCount = () => {
    return wishlistItems.length;
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    getWishlistItemsCount,
    clearWishlist: () => setWishlistItems([])
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};