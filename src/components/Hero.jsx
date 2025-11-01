import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Truck, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-pink-200 mb-8">
            <Sparkles className="h-5 w-5 text-pink-500 mr-2" />
            <span className="text-pink-600 font-semibold">New Crystal Collection</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Reveal Your</span>
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">Inner Glow</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover luxury skincare and cosmetics crafted with natural ingredients. Your journey to radiant beauty starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/shop" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 transform">
              <Sparkles className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
              Shop The Collection
            </Link>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border-2 border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <Star className="h-6 w-6 mr-3 text-yellow-400 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-green-100 rounded-full mb-4"><Truck className="h-7 w-7 text-green-600" /></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On all orders over $50</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-blue-100 rounded-full mb-4"><Star className="h-7 w-7 text-blue-600" /></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">100% Natural Ingredients</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full mb-4"><Shield className="h-7 w-7 text-purple-600" /></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe & Tested</h3>
              <p className="text-gray-600 text-sm">Dermatologist Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;