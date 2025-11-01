import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal,
    clearCart 
  } = useCart();
  
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calculate totals
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - discount;

  const applyPromoCode = () => {
    const codes = {
      'WELCOME10': 0.1,
      'SAVE20': 0.2,
      'FREESHIP': 5.99
    };

    const code = promoCode.toUpperCase();
    if (codes[code]) {
      const discountValue = codes[code] <= 1 ? subtotal * codes[code] : codes[code];
      setDiscount(discountValue);
      alert(`Promo code applied! Discount: $${discountValue.toFixed(2)}`);
    } else {
      alert('Invalid promo code');
    }
    setPromoCode('');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    console.log('Proceeding to checkout with items:', cartItems);
    alert('Proceeding to checkout!');
    // navigate('/checkout');
  };

  const continueShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 pb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
                  <button 
                    onClick={continueShopping}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-pink-100 hover:shadow-md transition-shadow duration-300">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="text-lg font-bold text-pink-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors mt-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-pink-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-grow px-4 py-2 border border-pink-200 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-500" 
                  />
                  <button 
                    onClick={applyPromoCode}
                    className="bg-pink-500 text-white px-6 py-2 rounded-r-full hover:bg-pink-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Proceed to Checkout <ArrowRight className="h-5 w-5 ml-2" />
              </button>

              {/* Clear Cart Button (optional) */}
              {cartItems.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="w-full mt-4 text-gray-600 hover:text-red-600 py-2 rounded-full font-medium transition-colors"
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;