import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, ShoppingCart, Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1, name: "Crystal Glow Serum", price: 49.99, originalPrice: 64.99,
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600",
      "https://images.unsplash.com/photo-1556228578-9a93b5b74f56?w=600",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
      "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=600"
    ],
    rating: 4.8, reviewCount: 127, category: "Skincare",
    description: "A luxurious serum infused with crystal extracts and hyaluronic acid that deeply hydrates and revitalizes your skin. Reveal your natural glow with our premium formula.",
    features: ["Deeply hydrates and plumps skin", "Reduces appearance of fine lines", "Brightens complexion", "Non-greasy, fast-absorbing formula"],
    ingredients: "Hyaluronic Acid, Rose Quartz Extract, Vitamin C, Jojoba Oil, Aloe Vera",
    howToUse: "Apply 2-3 drops to cleansed face and neck every morning and evening. Gently massage until fully absorbed.",
    inStock: true, sku: "GLOW-SERUM-001"
  };

  const relatedProducts = [
    { id: 2, name: "Rose Quartz Face Cream", price: 39.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", rating: 4.6 },
    { id: 3, name: "Hydrating Face Mist", price: 24.99, image: "https://images.unsplash.com/photo-1556228578-9a93b5b74f56?w=400", rating: 4.5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link><span>›</span>
          <Link to="/shop" className="hover:text-pink-500 transition-colors">Shop</Link><span>›</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-4">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-96 object-cover rounded-xl" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(index)} className={`bg-white rounded-xl border-2 p-2 transition-all duration-300 ${
                  selectedImage === index ? 'border-pink-500 shadow-lg scale-105' : 'border-pink-200 hover:border-pink-300'
                }`}>
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">{product.category}</span>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-pink-600">${product.price}</span>
                {product.originalPrice && <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>}
                {product.originalPrice && <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Save ${(product.originalPrice - product.price).toFixed(2)}</span>}
              </div>
            </div>

            <div className="space-y-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center space-x-3 bg-white border border-pink-200 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-pink-500 hover:text-pink-700 transition-colors"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-pink-500 hover:text-pink-700 transition-colors"><Plus className="h-4 w-4" /></button>
                </div>
                <span className="text-sm text-gray-600">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="p-4 border-2 border-pink-200 text-pink-500 rounded-full hover:border-pink-300 transition-colors"><Heart className="h-5 w-5" /></button>
                <button className="p-4 border-2 border-pink-200 text-pink-500 rounded-full hover:border-pink-300 transition-colors"><Share2 className="h-5 w-5" /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-pink-200">
              <div className="flex items-center space-x-3"><Truck className="h-6 w-6 text-green-500" /><div><p className="font-semibold text-gray-800">Free Shipping</p><p className="text-sm text-gray-600">On orders over $50</p></div></div>
              <div className="flex items-center space-x-3"><RotateCcw className="h-6 w-6 text-blue-500" /><div><p className="font-semibold text-gray-800">30-Day Return</p><p className="text-sm text-gray-600">Money back guarantee</p></div></div>
              <div className="flex items-center space-x-3"><Shield className="h-6 w-6 text-purple-500" /><div><p className="font-semibold text-gray-800">Secure Payment</p><p className="text-sm text-gray-600">256-bit encryption</p></div></div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 mb-16">
          <div className="border-b border-pink-200">
            <div className="flex space-x-8 px-6">
              {['description', 'ingredients', 'how-to-use', 'reviews'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 font-medium border-b-2 transition-colors ${
                  activeTab === tab ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-600 hover:text-pink-500'
                }`}>
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>}
            {activeTab === 'how-to-use' && <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800">{product.rating}</div>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviewCount} reviews</div>
                  </div>
                </div>
                <div className="text-center py-8">
                  <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg border border-pink-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-600">${relatedProduct.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;