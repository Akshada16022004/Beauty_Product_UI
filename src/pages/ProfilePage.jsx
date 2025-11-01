import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Heart, ShoppingBag, MapPin, LogOut, Edit3, Calendar, Phone, Mail, Plus, Package, Star, Crown, Sparkles } from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState({
    name: 'Akshada Shirke',
    email: 'akshadaexample@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024',
    avatar: '/avatar.jpg',
    loyaltyTier: 'Gold Member',
    points: 1250,
    level: 'Beauty Expert'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: 'Akshada Shirke',
    email: 'akshadaexample@email.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024'
  });

  const addresses = [
    {
      id: 1,
      type: 'home',
      name: 'Home Address',
      street: '123 Beauty Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'work',
      name: 'Work Address',
      street: '456 Glamour Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      isDefault: false
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile Info', icon: User, color: 'from-blue-500 to-cyan-500' },
    { id: 'orders', label: 'My Orders', icon: Package, color: 'from-purple-500 to-pink-500' },
    { id: 'addresses', label: 'Addresses', icon: MapPin, color: 'from-green-500 to-emerald-500' },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, color: 'from-rose-500 to-red-500' }
  ];

  const handleEditToggle = () => {
    if (isEditing) {
      setUser(editForm);
    }
    setIsEditing(!isEditing);
  };

  const handleEditChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTabClick = (tabId) => {
    if (tabId === 'wishlist') {
      navigate('/wishlist');
    } else if (tabId === 'orders') {
      navigate('/history');
    } else {
      setActiveTab(tabId);
    }
  };

  const AddressCard = ({ address }) => (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{address.name}</h3>
              {address.isDefault && (
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg">
                  Default
                </span>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {address.street}<br />
            {address.city}, {address.state} {address.zipCode}
          </p>
        </div>
        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300">
          <Edit3 className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="flex space-x-3">
        <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
          Edit
        </button>
        {!address.isDefault && (
          <button className="flex-1 border-2 border-red-300 text-red-600 py-3 rounded-2xl font-semibold hover:bg-red-50 hover:border-red-400 transition-all duration-300">
            Remove
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2 rounded-2xl shadow-lg">
                  <Crown className="h-4 w-4" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black mb-3">{user.name}</h1>
                <p className="text-purple-200 text-lg mb-4">{user.email}</p>
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-sm font-bold shadow-lg">
                    {user.loyaltyTier}
                  </span>
                  <span className="text-purple-300 text-sm">✨ Member since {user.joinDate}</span>
                </div>
              </div>
            </div>
            
            <button className="hidden lg:flex items-center space-x-3 bg-white/20 backdrop-blur-lg px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-500 shadow-2xl">
              <LogOut className="h-5 w-5" />
              <span className="font-semibold">Sign Out</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Enhanced Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 sticky top-8">
                {/* User Level Card */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white text-center mb-8 shadow-2xl">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{user.level}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    <span className="text-amber-300 font-semibold">{user.points} Points</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-3">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-500 group ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r shadow-2xl text-white transform scale-105'
                          : 'bg-white/50 text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105'
                      } ${activeTab === tab.id ? tab.color : ''}`}
                    >
                      <div className={`p-2 rounded-xl ${
                        activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <tab.icon className={`h-5 w-5 ${
                          activeTab === tab.id ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="font-semibold">{tab.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Mobile Sign Out */}
                <button className="lg:hidden w-full flex items-center space-x-3 px-5 py-4 rounded-2xl text-gray-700 bg-white/50 hover:bg-red-50 hover:text-red-600 transition-all duration-300 mt-6 group hover:scale-105">
                  <LogOut className="h-5 w-5" />
                  <span className="font-semibold">Sign Out</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Personal Information
                      </h2>
                      <button
                        onClick={handleEditToggle}
                        className="flex items-center space-x-3 bg-gradient-to-r from-gray-900 to-slate-800 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Edit3 className="h-5 w-5" />
                        <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-4">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => handleEditChange('name', e.target.value)}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50"
                          />
                        ) : (
                          <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                              <User className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-gray-900 font-semibold text-lg">{user.name}</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-4">Email Address</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => handleEditChange('email', e.target.value)}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50"
                          />
                        ) : (
                          <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                              <Mail className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-gray-900 font-semibold text-lg">{user.email}</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-4">Phone Number</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={editForm.phone}
                            onChange={(e) => handleEditChange('phone', e.target.value)}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/50"
                          />
                        ) : (
                          <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                              <Phone className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-gray-900 font-semibold text-lg">{user.phone}</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-4">Member Since</label>
                        <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-gray-900 font-semibold text-lg">{user.joinDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    {isEditing && (
                      <div className="flex justify-end space-x-4 mt-8">
                        <button 
                          onClick={handleEditToggle}
                          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Saved Addresses
                    </h2>
                    <button className="flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <Plus className="h-5 w-5" />
                      <span>Add New Address</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map(address => (
                      <AddressCard key={address.id} address={address} />
                    ))}
                  </div>
                </div>
              )}

              {/* Orders Tab - Now redirects to History page */}
              {activeTab === 'orders' && (
                <div className="text-center py-16">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-12">
                    <Package className="h-16 w-16 text-purple-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Redirecting to Order History</h3>
                    <p className="text-gray-600 mb-6">Taking you to your complete order history page...</p>
                    <button 
                      onClick={() => navigate('/history')}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                    >
                      Go to Order History
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;