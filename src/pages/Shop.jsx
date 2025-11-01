import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Search, Filter, Sparkles } from "lucide-react";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingFilter, setRatingFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  // ---------- Category from URL ----------
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) setCategory(categoryParam.toLowerCase());
  }, [location.search]);

  const products = [
    { id: 1, name: "Crystal Glow Serum", price: 49.99, image: "/skincare/crystalG.webp", rating: 4.8, category: "skincare", description: "Vitamin C serum for glowing skin" },
    { id: 2, name: "Luxury Lipstick Set", price: 29.99, image: "/skincare/lipstick.jpg", rating: 4.9, category: "makeup", description: "5 premium matte lipsticks" },
    { id: 3, name: "Hydrating Face Mist", price: 24.99, image: "/skincare/face_mist.avif", rating: 4.5, category: "skincare", description: "Refreshing rose water mist" },
    { id: 4, name: "Volumizing Mascara", price: 19.99, image: "/makeup/maskara.jpeg", rating: 4.7, category: "makeup", description: "Lengthening and volumizing mascara" },
    { id: 5, name: "Luxury Perfume", price: 89.99, image: "/fragrance/perfume.webp", rating: 4.8, category: "fragrance", description: "Elegant floral fragrance" },
    { id: 6, name: "Nourishing Hair Oil", price: 44.99, image: "/haircare/oil.webp", rating: 4.7, category: "haircare", description: "Argan oil for shiny hair" },
    { id: 7, name: "Organic Face Mask", price: 22.99, image: "/skincare/face.jpg", rating: 4.6, category: "skincare", description: "Clay mask for deep cleansing" },
    { id: 8, name: "Repairing Hair Mask", price: 28.99, image: "/haircare/hair_mask.webp", rating: 4.6, category: "haircare", description: "Deep conditioning treatment" },
    { id: 9, name: "Rose Water Toner", price: 18.99, image: "/skincare/rose.jpeg", rating: 4.4, category: "skincare", description: "Hydrating toner for daily use" },
    { id: 10, name: "Matte Foundation", price: 39.99, image: "/makeup/foundation.webp", rating: 4.7, category: "makeup", description: "Long-lasting smooth coverage" },
    { id: 11, name: "Hair Straight Serum", price: 34.99, image: "/serum.jpeg", rating: 4.5, category: "haircare", description: "Smoothens and protects hair" },
    { id: 12, name: "Vanilla Essence Perfume", price: 74.99, image: "/fragrance/perfume.webp", rating: 4.9, category: "fragrance", description: "Sweet vanilla fragrance" },
  ];

  // ---------- Filtering Logic ----------
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) =>
        ratingFilter === "all" ? true : p.rating >= parseFloat(ratingFilter)
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [products, category, searchQuery, priceRange, sortBy, ratingFilter]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // ---------- Reset ----------
  const handleReset = () => {
    setSearchQuery("");
    setCategory("all");
    setSortBy("featured");
    setPriceRange([0, 100]);
    setRatingFilter("all");
    setVisibleCount(8);
    navigate("/shop");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ---------- Header ---------- */}
        <div className="text-center mb-12">
  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 pb-2">
    Shop The Products
  </h1>
  <p className="text-xl text-slate-600">Discover luxury beauty products for your radiant transformation</p>
</div>

        {/* ---------- Filter Section ---------- */}
        <div className="bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search beauty products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Category Dropdown */}
            <select
              value={category}
              onChange={(e) => {
                const selected = e.target.value;
                setCategory(selected);
                if (selected === "all") navigate("/shop");
                else navigate(`/shop?category=${selected}`);
              }}
              className="border border-pink-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 text-gray-700"
            >
              <option value="all">All Categories</option>
              <option value="skincare">Skincare</option>
              <option value="makeup">Makeup</option>
              <option value="haircare">Haircare</option>
              <option value="fragrance">Fragrance</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-pink-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 text-gray-700"
            >
              <option value="featured"> Featured</option>
              <option value="price-low">💰 Price: Low to High</option>
              <option value="price-high">💎 Price: High to Low</option>
              <option value="rating">⭐ Top Rated</option>
            </select>

            {/* Rating Filter */}
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="border border-pink-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 text-gray-700"
            >
              <option value="all">All Ratings</option>
              <option value="4">⭐ 4 & above</option>
              <option value="4.5">🌟 4.5 & above</option>
            </select>

            {/* Price Range */}
            <div className="flex flex-col items-center">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Price up to:{" "}
                <span className="text-pink-600 font-semibold">
                  ${priceRange[1]}
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-32 accent-pink-500"
              />
            </div>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-md"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* ---------- Product Grid ---------- */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {visibleCount < filteredProducts.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
              <Filter className="h-10 w-10 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or resetting them to see all products.
            </p>
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;


