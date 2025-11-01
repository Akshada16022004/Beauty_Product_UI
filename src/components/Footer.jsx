import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <Gem className="h-8 w-8" /> 
              <span className="text-2xl font-bold">GlowGoddess</span>
            </div>
            <p className="text-pink-100 mb-4">
              Your destination for premium beauty products that reveal your natural glow.
            </p> 
       

            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-200 transition-colors" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-pink-200 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-pink-200 transition-colors" />
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Shop Categories</h3>
            <ul className="space-y-2 text-pink-100">
              <li>
                <Link 
                  to="/shop?category=skincare" 
                  className="hover:text-white transition-colors block py-0"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop?category=makeup" 
                  className="hover:text-white transition-colors block py-1"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop?category=haircare" 
                  className="hover:text-white transition-colors block py-1"
                >
                  Hair Care
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop?category=fragrance" 
                  className="hover:text-white transition-colors block py-1"
                >
                  Fragrance
                </Link>
              </li>
            </ul>
          </div>

<div>
  <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
  <ul className="space-y-2 text-pink-100">
    <li>
      <Link to="/contact" className="hover:text-white transition-colors">
        Contact Us
      </Link>
    </li>
    <li>
      <Link to="/shipping" className="hover:text-white transition-colors">
        Shipping Info
      </Link>
    </li>
    <li>
      <Link to="/returns" className="hover:text-white transition-colors">
        Returns
      </Link>
    </li>
    <li>
      <Link to="/faq" className="hover:text-white transition-colors">
        FAQ
      </Link>
    </li>
  </ul>
</div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-pink-100 mb-4">Subscribe for exclusive offers and beauty tips</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-full text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="bg-pink-700 hover:bg-pink-800 px-6 py-2 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-8 pt-8 text-center text-pink-200">
          <p>&copy; 2024 GlowGoddess. All rights reserved.</p>
        </div>
     </div>
    </footer>
  );
};

export default Footer;