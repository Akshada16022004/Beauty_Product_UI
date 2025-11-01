import React from 'react';
import { RotateCcw, Calendar, Package, CheckCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 pb-2">
            Returns & Exchanges
          </h1>
          <p className="text-gray-600 text-lg">
            Easy returns and exchanges within 30 days. Your satisfaction is guaranteed.
          </p> 
        </div>

        {/* Return Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">30-Day Return Policy</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>30 days from delivery date</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Items must be unused and in original packaging</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Free returns for defective items</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Return</h3>
            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Contact our support team</li>
              <li>Receive your return label</li>
              <li>Package items securely</li>
              <li>Drop off at any shipping location</li>
              <li>Receive refund within 5-7 business days</li>
            </ol>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Refund Information</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Refund Processing:</strong> Refunds are processed within 5-7 business days after we receive your return. The refund will be issued to your original payment method.
            </p>
            <p>
              <strong>Shipping Costs:</strong> Original shipping costs are non-refundable. Return shipping is free for defective or incorrect items.
            </p>
            <p>
              <strong>Exchanges:</strong> We offer free exchanges for defective products or if you received the wrong item.
            </p>
          </div>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-pink-50 rounded-2xl border border-pink-200 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Non-Returnable Items</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Opened skincare and makeup products for hygiene reasons</li>
            <li>• Personalized or custom orders</li>
            <li>• Gift cards and downloadable products</li>
            <li>• Items marked as final sale</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Returns;