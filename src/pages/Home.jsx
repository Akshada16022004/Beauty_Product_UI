import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Truck, Shield, Heart, Clock, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: "vitamin C Oil-Free Daily Face Moisturizer",
      price: 49.99,
      originalPrice: 64.99,
      image: "/moisurizer.jpg",
      rating: 4.8,
      category: "skincare",
      isNew: true,
      description: "Vitamin C serum with hyaluronic acid for radiant glow"
    },
    {
      id: 2,
      name: "Rice Face Wash",
      price: 39.99,
      originalPrice: 49.99,
      image: "/mamaearth.jpg",
      rating: 4.6,
      category: "skincare",
      isNew: false,
      description: "Hydrating cream with rose quartz extract"
    },
    {
      id: 3,
      name: "Supershine Lip Gloss",
      price: 29.99,
      originalPrice: 39.99,
      image: "/lipgloss.webp",
      rating: 4.9,
      category: "makeup",
      isNew: true,
       description: "5 premium matte lipsticks in trending shades"
    }
  ];

  const categories = [
    {
      id: "skincare",
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300",
      description: "Nourish your skin",
      productCount: "45+ Products"
    },
    {
      id: "makeup",
      name: "Makeup",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300",
      description: "Enhance your beauty",
      productCount: "32+ Products"
    },
    {
      id: "haircare",
      name: "Haircare",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300",
      description: "Transform your hair",
      productCount: "28+ Products"
    },
    {
      id: "fragrance",
      name: "Fragrance",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300",
      description: "Signature scents",
      productCount: "18+ Products"
    }
  ];

  const featuredCollections = [
    {
      id: 1,
      name: "Winter Glow Collection",
      image: "https://images.unsplash.com/photo-1611088133816-31a66e5bfe5f?w=400",
      description: "Radiant skin for the cold season",
      products: "12 Products"
    },
    {
      id: 2,
      name: "Luxury Makeup Set",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      description: "Premium makeup essentials",
      products: "8 Products"
    },
    {
      id: 3,
      name: "Hair Wellness",
      image: "/hairwell.jpeg",
      description: "Nourish and repair",
      products: "15 Products"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Cruelty-free ingredients"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe & Tested",
      description: "Dermatologist approved"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day guarantee"
    }
  ];

  const offers = [
    "🎄 Winter Sale: Up to 50% OFF on all skincare!",
    "🚚 Free Shipping on orders above $50",
    "💝 Buy 1 Get 1 Free on selected lipsticks",
    "⭐ New Customer? Get 20% OFF your first order",
    "🎁 Gift Cards Available - Perfect Christmas Present",
    "🔥 Limited Time: 30% OFF luxury fragrances"
  ];

  const handleShopClick = () => {
    navigate('/shop');
  };

  const handleLearnMore = () => {
    // You can implement:
    // 1. Scroll to features section
    // 2. Open about us modal
    // 3. Navigate to about page
    // 4. Show brand story video
    
    // Example: Scroll to features section
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Marquee Offer Bar */}
       <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {offers.concat(offers).map((offer, index) => (
            <span key={index} className="mx-8 text-sm font-medium">
              {offer}
            </span>
          ))}
        </div>
      </div> 

      {/* Hero Section */}
  {/* Hero Section */}
<section className="relative text-white">
  {/* Background Image - No overlay to see original colors */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: 'url("/back4.avif")' }}
  ></div>
  
  {/* Very light overlay just for text readability */}
  <div className="absolute inset-0 bg-black/10 z-10"></div>
  
  <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div className="text-center lg:text-left space-y-6">
        <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">PREMIUM BEAUTY</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
          Discover Your
          <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent drop-shadow-sm">
            Natural Glow
          </span>
        </h1>

        <p className="text-lg text-white font-medium max-w-xl backdrop-blur-sm rounded-lg p-4 bg-black/20 border border-white/20 drop-shadow-lg">
          Luxury beauty products crafted with natural ingredients to enhance your natural beauty and confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* FIX: Add onClick handler to Shop Collection button */}
          <button 
            onClick={handleShopClick}
            className="bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors flex items-center gap-2 justify-center shadow-2xl"
          >
            Shop Collection
            <ArrowRight className="h-4 w-4" />
          </button>
          
          {/* FIX: Add onClick handler to Learn More button */}
          <button 
            onClick={handleLearnMore}
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm shadow-lg"
          >
            Learn More
          </button>
        </div>

        <div className="flex gap-8 pt-4">
          <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-pink-100 text-sm">Customers</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-2xl font-bold text-white">4.9★</div>
            <div className="text-pink-100 text-sm">Rating</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-pink-100 text-sm">Products</div>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      {/* <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/back3.jpg" 
            alt="Beauty Products"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div> */}
        
        {/* Rating badge */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
            <span>4.9/5</span>
          </div>
        </div>
      </div>
    
  </div>
</section>
     {/* Categories Section */}
<section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Shop By <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Category</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our wide range of premium beauty categories
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Skincare Category */}
      <div 
        onClick={() => handleCategoryClick(1)}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 hover:border-purple-200"
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src="/skincareimg1.jpg" 
            alt="Skincare Products"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Skincare
          </h3>
          <p className="text-gray-600 text-sm mb-3">Face creams, serums & treatments</p>
          <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold">
            24 Products
          </div>
        </div>
      </div>

      {/* Makeup Category */}
      <div 
        onClick={() => handleCategoryClick(2)}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 hover:border-purple-200"
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src="/makeupimg.jpg" 
            alt="Makeup Products"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Makeup
          </h3>
          <p className="text-gray-600 text-sm mb-3">Lipsticks, foundations & more</p>
          <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold">
            36 Products
          </div>
        </div>
      </div>

      {/* Fragrance Category */}
      <div 
        onClick={() => handleCategoryClick(3)}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 hover:border-purple-200"
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src="/fragranceing.jpg" 
            alt="Fragrance Products"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Fragrance
          </h3>
          <p className="text-gray-600 text-sm mb-3">Perfumes & body mists</p>
          <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold">
            18 Products
          </div>
        </div>
      </div>

      {/* Hair Care Category */}
      <div 
        onClick={() => handleCategoryClick(4)}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 hover:border-purple-200"
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src="/haircare1.webp" 
            alt="Hair Care Products"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Hair Care
          </h3>
          <p className="text-gray-600 text-sm mb-3">Shampoos, conditioners & treatments</p>
          <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold">
            22 Products
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Winter Sale Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm font-bold">WINTER SALE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Winter Glow Up to <span className="text-red-500">50% OFF</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Get ready for the winter season with our special discounts on skincare and beauty essentials. Limited time offer!
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">50%</div>
                    <div className="text-gray-500 text-sm">Skincare</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">40%</div>
                    <div className="text-gray-500 text-sm">Makeup</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">30%</div>
                    <div className="text-gray-500 text-sm">Fragrance</div>
                  </div>
                </div>
                <button 
                  onClick={handleShopClick}
                  className="bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
                >
                  Shop Winter Sale
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/winter.webp"
                  alt="Winter Sale"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  SALE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Features Section */}
{/* Features Section */}
<section id="features" className="py-16 bg-gradient-to-br from-purple-50/30 to-pink-50/30">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
            {feature.icon}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Featured Collections */}
<section className="py-16 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Collections</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Curated collections for your beauty needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Winter Glow Collection */}
      <div className="group cursor-pointer">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 h-full flex flex-col">
          <div className="h-80 overflow-hidden relative flex-grow">
            <img 
              src="/wintercare.webp" 
              alt="Winter Glow Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Winter Glow
            </h3>
            <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold">
              15 Products
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Makeup Set */}
      <div className="group cursor-pointer">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 h-full flex flex-col">
          <div className="h-80 overflow-hidden relative flex-grow">
            <img 
              src="/makeup1.webp" 
              alt="Luxury Makeup Set"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Bestseller
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Luxury Makeup Set
            </h3>
            <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold">
              8 Products
            </div>
          </div>
        </div>
      </div>

      {/* Hair Wellness */}
      <div className="group cursor-pointer">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 h-full flex flex-col">
          <div className="h-80 overflow-hidden relative flex-grow">
            <img 
              src="/hairwell.jpeg" 
              alt="Hair Wellness"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Hair Wellness
            </h3>
            <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold">
              12 Products
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Featured Products */}
<section className="py-16 bg-gradient-to-br from-purple-50/30 to-pink-50/30">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Products</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover our best-selling beauty products loved by thousands worldwide
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    <div className="text-center mt-12">
      <button 
        onClick={handleShopClick}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
      >
        View All Products
      </button>
    </div>
  </div>
</section>


{/* Newsletter */}
<section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Join Our Beauty Community
    </h2>
    <p className="text-pink-100 mb-8">
      Get exclusive offers and beauty tips
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
      <button className="bg-white text-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </div>
  </div>
  
</section>
   <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;