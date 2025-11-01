import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Package, 
  CheckCircle, 
  Clock, 
  Truck,
  Star,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Search,
  Grid,
  List,
  Filter,
  X,
  MapPin,
  CreditCard
} from 'lucide-react';

const History = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const orders = [
    {
      id: 'GLOW-2024-001', 
      date: '2024-01-15', 
      status: 'delivered', 
      total: 129.97,
      subtotal: 119.97,
      shipping: 10.00,
      items: [
        { 
          id: 1,
          name: 'Crystal Glow Serum', 
          quantity: 1, 
          price: 49.99, 
          image: '/skincare/faceserum.webp',
          category: 'skincare'
        },
        { 
          id: 2,
          name: 'Rose Quartz Face Cream', 
          quantity: 2, 
          price: 39.99, 
          image: '/skincare/rose-quartz-7.webp',
          category: 'skincare'
        }
      ],
      tracking: 'TRK123456789', 
      deliveredDate: '2024-01-18',
      estimatedDelivery: '2024-01-18',
      shippingAddress: {
        name: 'Akshada Shirke',
        street: '123 Beauty Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      },
      paymentMethod: 'Visa ending in 4242',
      isFavorite: true
    },
    {
      id: 'GLOW-2024-002', 
      date: '2024-01-10', 
      status: 'shipped', 
      total: 89.97,
      subtotal: 79.97,
      shipping: 10.00,
      items: [
        { 
          id: 3,
          name: 'Luxury Lipstick Set', 
          quantity: 1, 
          price: 29.99, 
          image: '/skincare/lipstick.jpg',
          category: 'makeup'
        },
        { 
          id: 4,
          name: 'Makeup Brush Set', 
          quantity: 1, 
          price: 34.99, 
          image: '/skincare/brush.jpg',
          category: 'tools'
        }
      ],
      tracking: 'TRK987654321', 
      estimatedDelivery: '2024-01-14',
      shippingAddress: {
        name: 'Akshada Shirke',
        street: '123 Beauty Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      },
      paymentMethod: 'PayPal',
      isFavorite: false
    },
    {
      id: 'GLOW-2024-003', 
      date: '2024-01-05', 
      status: 'processing', 
      total: 84.98,
      subtotal: 74.98,
      shipping: 10.00,
      items: [
        { 
          id: 5,
          name: 'Hydrating Face Mist', 
          quantity: 2, 
          price: 24.99, 
          image: '/skincare/face_mist.avif',
          category: 'skincare'
        }
      ],
      tracking: null, 
      estimatedDelivery: '2024-01-12',
      shippingAddress: {
        name: 'Akshada Shirke',
        street: '123 Beauty Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      },
      paymentMethod: 'Mastercard ending in 8888',
      isFavorite: true
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { key: 'all', label: 'All Orders', count: orders.length },
    { key: 'processing', label: 'Processing', count: orders.filter(order => order.status === 'processing').length },
    { key: 'shipped', label: 'Shipped', count: orders.filter(order => order.status === 'shipped').length },
    { key: 'delivered', label: 'Delivered', count: orders.filter(order => order.status === 'delivered').length }
  ];

  const sortOptions = [
    { key: 'newest', label: 'Newest First' },
    { key: 'oldest', label: 'Oldest First' },
    { key: 'highest', label: 'Highest Price' },
    { key: 'lowest', label: 'Lowest Price' }
  ];

  const getStatusConfig = (status) => {
    const configs = {
      delivered: {
        icon: CheckCircle,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        label: 'Delivered'
      },
      shipped: {
        icon: Truck,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        label: 'Shipped'
      },
      processing: {
        icon: Clock,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        label: 'Processing'
      }
    };
    return configs[status] || { icon: Package, color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', label: status };
  };

  const filteredOrders = orders
    .filter(order => {
      const matchesFilter = activeFilter === 'all' || order.status === activeFilter;
      const matchesSearch = searchTerm === '' || 
        order.items.some(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.total - a.total;
        case 'lowest':
          return a.total - b.total;
        default:
          return 0;
      }
    });

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const clearSearch = () => setSearchTerm('');
  const startShopping = () => navigate('/shop');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
<div className="text-center mb-12">
  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3 pb-2">
    Order History
  </h1>
  <p className="text-lg text-slate-600">Your complete order timeline</p>
</div>

        <div className="flex flex-col lg:flex-row gap-8"> 
          
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Filter className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Filters & Sort</h3>
              </div>
              
              {/* Status Filters */}
              <div className="mb-8">
                <h4 className="font-medium text-slate-900 mb-4">Order Status</h4>
                <div className="space-y-2">
                  {filters.map((filter) => {
                    const config = getStatusConfig(filter.key);
                    const IconComponent = config.icon;
                    return (
                      <button
                        key={filter.key}
                        onClick={() => setActiveFilter(filter.key)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                          activeFilter === filter.key
                            ? `${config.bgColor} ${config.borderColor} border-2`
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className={`h-4 w-4 ${config.color}`} />
                          <span className="font-medium text-slate-700">{filter.label}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activeFilter === filter.key ? 'bg-white text-slate-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {filter.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors bg-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and View Controls */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Search Bar */}
                <div className="flex-1 relative min-w-0">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search orders, products, or tracking numbers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-10 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                    />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white text-slate-700 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-slate-700 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Orders List */}
            {viewMode === 'list' && (
              <div className="space-y-6">
                {filteredOrders.length === 0 ? (
                  <EmptyState searchTerm={searchTerm} onStartShopping={startShopping} />
                ) : (
                  filteredOrders.map((order) => {
                    const config = getStatusConfig(order.status);
                    const IconComponent = config.icon;
                    
                    return (
                      <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        {/* Order Header */}
                        <div 
                          className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                          onClick={() => toggleOrderExpand(order.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-xl ${config.bgColor} ${config.borderColor} border`}>
                                <IconComponent className={`h-6 w-6 ${config.color}`} />
                              </div>
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl font-semibold text-slate-900">Order {order.id}</h3>
                                  {order.isFavorite && (
                                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-600">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(order.date).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'short', 
                                      day: 'numeric' 
                                    })}</span>
                                  </div>
                                  <span>•</span>
                                  <span>{order.items.length} item{order.items.length > 1 ? 's' : ''}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.color}`}>
                                  <IconComponent className="h-3 w-3" />
                                  {config.label}
                                </span>
                                <p className="text-2xl font-bold text-slate-900 mt-2">
                                  ${order.total.toFixed(2)}
                                </p>
                              </div>
                              <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${
                                expandedOrder === order.id ? 'rotate-180' : ''
                              }`} />
                            </div>
                          </div>
                        </div>

                        {/* Expandable Content */}
                        {expandedOrder === order.id && (
                          <div className="border-t border-slate-200 bg-slate-50/50 p-6">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                              {/* Order Items */}
                              <div>
                                <h4 className="font-semibold text-slate-900 mb-4 text-lg">Order Items</h4>
                                <div className="space-y-3">
                                  {order.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                                      <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                      />
                                      <div className="flex-1">
                                        <p className="font-medium text-slate-900">{item.name}</p>
                                        <p className="text-sm text-slate-600">Quantity: {item.quantity}</p>
                                        <p className="text-xs text-slate-500 capitalize">{item.category}</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="font-semibold text-slate-900">${item.price.toFixed(2)}</p>
                                        <p className="text-sm text-slate-500">${(item.price * item.quantity).toFixed(2)} total</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Order Details */}
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Order Details</h4>
                                  <div className="space-y-4">
                                    {/* Shipping Info */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-200">
                                      <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <div>
                                          <p className="font-medium text-slate-900">{order.shippingAddress.name}</p>
                                          <p className="text-sm text-slate-600">{order.shippingAddress.street}</p>
                                          <p className="text-sm text-slate-600">
                                            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Payment Info */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-200">
                                      <div className="flex items-start gap-3">
                                        <CreditCard className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <div>
                                          <p className="font-medium text-slate-900">Payment Method</p>
                                          <p className="text-sm text-slate-600">{order.paymentMethod}</p>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Delivery Info */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-200">
                                      <p className="text-sm text-slate-600 mb-1">Estimated Delivery</p>
                                      <p className="font-medium text-slate-900">
                                        {order.deliveredDate 
                                          ? new Date(order.deliveredDate).toLocaleDateString()
                                          : new Date(order.estimatedDelivery).toLocaleDateString()
                                        }
                                      </p>
                                      {order.tracking && (
                                        <div className="mt-2">
                                          <p className="text-sm text-slate-600 mb-1">Tracking Number</p>
                                          <p className="font-mono text-sm text-blue-600">{order.tracking}</p>
                                        </div>
                                      )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                      <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                                        View Order Details
                                      </button>
                                      {order.status === 'delivered' && (
                                        <button className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                                          Buy Again
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredOrders.length === 0 ? (
                  <div className="col-span-full">
                    <EmptyState searchTerm={searchTerm} onStartShopping={startShopping} />
                  </div>
                ) : (
                  filteredOrders.map((order) => {
                    const config = getStatusConfig(order.status);
                    const IconComponent = config.icon;
                    
                    return (
                      <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
                        {/* Card Header */}
                        <div className="p-6 border-b border-slate-200">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${config.bgColor}`}>
                                <IconComponent className={`h-4 w-4 ${config.color}`} />
                              </div>
                              <span className={`text-sm font-medium ${config.color}`}>
                                {config.label}
                              </span>
                            </div>
                            {order.isFavorite && (
                              <Star className="h-4 w-4 text-amber-500 fill-current" />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">Order {order.id}</h3>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(order.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          {/* Items Preview */}
                          <div className="space-y-3 mb-4">
                            {order.items.slice(0, 2).map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                                  <p className="text-xs text-slate-600">Qty: {item.quantity}</p>
                                </div>
                              </div>
                            ))}
                            {order.items.length > 2 && (
                              <p className="text-sm text-slate-500 text-center">
                                +{order.items.length - 2} more items
                              </p>
                            )}
                          </div>

                          {/* Order Summary */}
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <p className="text-sm text-slate-600">Total Amount</p>
                              <p className="text-xl font-bold text-slate-900">
                                ${order.total.toFixed(2)}
                              </p>
                            </div>
                            {order.tracking && (
                              <div className="text-right">
                                <p className="text-xs text-slate-600">Tracking</p>
                                <p className="text-xs font-mono text-blue-600">{order.tracking}</p>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button 
                              onClick={() => toggleOrderExpand(order.id)}
                              className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors"
                            >
                              View Details
                            </button>
                            {order.status === 'delivered' && (
                              <button className="flex-1 border border-slate-300 text-slate-700 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                                Reorder
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Continue Shopping */}
            {filteredOrders.length > 0 && (
              <div className="text-center mt-12">
                <button 
                  onClick={startShopping}
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Continue Shopping</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = ({ searchTerm, onStartShopping }) => (
  <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-200">
    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Package className="h-10 w-10 text-slate-400" />
    </div>
    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
      {searchTerm ? 'No orders found' : 'No orders yet'}
    </h3>
    <p className="text-slate-600 mb-8 max-w-md mx-auto">
      {searchTerm 
        ? `No orders found matching "${searchTerm}". Try different keywords or check your filters.`
        : 'Start your shopping journey and your orders will appear here.'
      }
    </p>
    <button 
      onClick={onStartShopping}
      className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
    >
      Start Shopping
    </button>
  </div>
);

export default History;