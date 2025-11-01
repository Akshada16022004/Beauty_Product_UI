import React from 'react';
import { Truck, Clock, Package, Shield, RotateCcw } from 'lucide-react';

const Shipping = () => {
  const shippingInfo = [
    {
      icon: Truck,
      title: "Standard Shipping",
      duration: "3-5 business days",
      price: "$4.99",
      freeThreshold: "Free on orders over $50",
      description: "Reliable ground shipping across the US"
    },
    {
      icon: Clock,
      title: "Express Shipping",
      duration: "2 business days",
      price: "$9.99",
      freeThreshold: "Free on orders over $100",
      description: "Priority shipping for faster delivery"
    },
    {
      icon: Package,
      title: "Overnight Shipping",
      duration: "1 business day",
      price: "$19.99",
      freeThreshold: "Available for all orders",
      description: "Next-day delivery for urgent needs"
    }
  ];

  const policies = [
    {
      icon: Shield,
      title: "Processing Time",
      description: "Orders are processed within 1-2 business days. You'll receive a confirmation email with tracking information once your order ships."
    },
    {
      icon: RotateCcw,
      title: "International Shipping",
      description: "We ship to select international destinations. Shipping costs and delivery times vary by location. Customs fees may apply."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 pb-2">
            Shipping Information
          </h1>
          <p className="text-gray-600 text-lg">
            Fast, reliable shipping to get your beauty products to you quickly and safely
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shippingInfo.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-pink-200 p-6 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-2xl font-bold text-pink-600 mb-2">{option.price}</p>
              <p className="text-gray-600 mb-2">{option.duration}</p>
              <p className="text-green-600 text-sm font-semibold mb-2">{option.freeThreshold}</p>
              <p className="text-gray-500 text-sm">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Shipping Policies */}
        <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shipping Policies</h2>
          
          <div className="space-y-6">
            {policies.map((policy, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <policy.icon className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Info */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Track Your Order</h3>
          <p className="mb-6 opacity-90">
            Have a tracking number? Check your order status anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter tracking number"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;