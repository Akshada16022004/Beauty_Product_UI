import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ArrowRight, Sparkles, Clock, Star, ShoppingBag } from 'lucide-react';

const CollectionsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const collections = [
    {
      id: 1,
      name: "Winter Glow Collection",
      description: "Radiant skincare for the cold season",
      image: "/collection/winterglow.webp",
      productCount: 15,
      isNew: true,
      category: "skincare",
      featured: true
    },
    {
      id: 2,
      name: "Luxury Makeup Set",
      description: "Premium makeup for every occasion",
      image: "/collection/makeup.jpg",
      productCount: 8,
      isBestSeller: true,
      category: "makeup",
      featured: true
    },
    {
      id: 3,
      name: "Hair Wellness",
      description: "Nourishing haircare solutions",
      image: "/collection/hair2.webp",
      productCount: 12,
      category: "haircare",
      featured: false
    },
    {
      id: 4,
      name: "Summer Essentials",
      description: "Lightweight products for sunny days",
      image: "/collection/summer.avif",
      productCount: 10,
      category: "skincare",
      featured: false
    },
    {
      id: 5,
      name: "Fragrance Library",
      description: "Signature scents for every mood",
      image: "/collection/fragrance.jpg",
      productCount: 6,
      isNew: true,
      category: "fragrance",
      featured: true
    },
    {
      id: 6,
      name: "Night Routine",
      description: "Products for your evening ritual",
      image: "/collection/night.webp",
      productCount: 7,
      category: "skincare",
      featured: false
    },
    {
      id: 7,
      name: "Travel Minis",
      description: "Perfect companions for your journeys",
      image: "/collection/travel.jpg",
      productCount: 9,
      category: "makeup",
      featured: false
    },
    {
      id: 8,
      name: "Organic Beauty",
      description: "Natural and sustainable products",
      image: "/collection/organic.jpg",
      productCount: 11,
      isBestSeller: true,
      category: "skincare",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'skincare', name: 'Skincare', count: collections.filter(c => c.category === 'skincare').length },
    { id: 'makeup', name: 'Makeup', count: collections.filter(c => c.category === 'makeup').length },
    { id: 'haircare', name: 'Hair Care', count: collections.filter(c => c.category === 'haircare').length },
    { id: 'fragrance', name: 'Fragrance', count: collections.filter(c => c.category === 'fragrance').length }
  ];

  const filteredCollections = collections.filter(collection => 
    selectedCategory === 'all' || collection.category === selectedCategory
  );

  const sortedCollections = [...filteredCollections].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'popular':
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const CollectionCard = ({ collection }) => (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
      <div className="relative overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {collection.isNew && (
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg">
              New
            </span>
          )}
          {collection.isBestSeller && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Bestseller
            </span>
          )}
          {collection.featured && (
            <span className="px-3 py-1 bg-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-2 bg-white/90 backdrop-blur-sm text-purple-700 text-sm font-semibold rounded-xl shadow-lg">
            {collection.productCount} products
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {collection.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {collection.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 capitalize">
            {collection.category}
          </span>
          <Link
            to={`/collection/${collection.id}`}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold group/link"
          >
            <span>Explore</span>
            <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );

  const CollectionList = ({ collection }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0 relative">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-24 h-24 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -top-2 -right-2 flex flex-col gap-1">
            {collection.isNew && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                New
              </span>
            )}
            {collection.isBestSeller && (
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                Hot
              </span>
            )}
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {collection.name}
              </h3>
              <p className="text-gray-600 mb-3">
                {collection.description}
              </p>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {collection.category}
                </span>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <ShoppingBag className="h-4 w-4" />
                  <span>{collection.productCount} products</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {collection.featured && (
                <div className="flex items-center space-x-1 text-pink-600">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              )}
            </div>
            <Link
              to={`/collection/${collection.id}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Collection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-pink-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">CURATED COLLECTIONS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your
            <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Perfect Collection
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Explore our carefully curated beauty collections designed to enhance your natural glow and simplify your routine.
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-purple-100">
                <Filter className="h-4 w-4 text-purple-600" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-0 focus:ring-0 text-gray-700"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="bg-white rounded-2xl px-4 py-2 shadow-lg border border-purple-100">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-0 focus:ring-0 text-gray-700"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-2xl p-1 shadow-lg border border-purple-100">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Collections Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedCollections.map(collection => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedCollections.map(collection => (
                <CollectionList key={collection.id} collection={collection} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {sortedCollections.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-purple-100 max-w-md mx-auto">
                <Sparkles className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No collections found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-purple-100 text-xl mb-8">
            Explore our full product catalog with hundreds of premium beauty items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse All Products
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Personalized Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;