'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES, Product, BUSINESS_INFO } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Search, SlidersHorizontal, Star, ShoppingBag, MessageCircle, Heart, Eye, Sparkles, Filter } from 'lucide-react';

export default function ProductCatalog() {
  const {
    addToCart,
    formatPrice,
    setSelectedProductForModal,
    toggleWishlist,
    wishlist,
    currency
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPriceUSD, setMaxPriceUSD] = useState<number>(300);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchPrice = item.priceUSD <= maxPriceUSD;
      return matchCategory && matchSearch && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPriceUSD, sortBy]);

  const handleWhatsAppOrderSingle = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const priceStr = formatPrice(product.priceUSD, product.priceINR);
    const message = encodeURIComponent(
      `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts.

I am interested in ordering:
*Product:* ${product.title}
*Price:* ${priceStr}

Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#E88D7D]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#8E2020] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Handcrafted Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#2D2727] tracking-tight">
            Explore Our Aesthetic Creations
          </h2>
          <p className="text-base text-gray-600">
            Browse our unique pipe cleaner & crochet floral art, divine seats, and custom garlands with dummy pricing options ($0 to $300).
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-md border border-[#E88D7D]/20 space-y-4">
          
          {/* Top Row: Search Input & Sort Selector */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search bouquets, garlands, lotuses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#C95B4A] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Price Slider Filter ($0 - $300) */}
            <div className="w-full sm:w-72 bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
              <div className="flex justify-between items-center text-xs font-semibold text-[#2D2727] mb-1">
                <span className="flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-[#C95B4A]" />
                  Max Price Filter:
                </span>
                <span className="text-[#8E2020] font-bold font-serif text-sm">
                  ${maxPriceUSD} {currency === 'INR' ? `(~₹${(maxPriceUSD * 82).toLocaleString('en-IN')})` : ''}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="10"
                value={maxPriceUSD}
                onChange={(e) => setMaxPriceUSD(Number(e.target.value))}
                className="w-full accent-[#C95B4A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium mt-0.5">
                <span>$0</span>
                <span>$150</span>
                <span>$300</span>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full sm:w-48">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl border border-gray-200 bg-white text-xs font-medium focus:outline-none focus:border-[#C95B4A] shadow-sm"
              >
                <option value="featured">Sort by: Featured & Trending</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated ★</option>
              </select>
            </div>
          </div>

          {/* Category Tabs Row */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar border-t border-gray-200/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#C95B4A] to-[#8E2020] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-[#FAF6F0] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-600 font-medium px-2">
          <span>Showing <strong>{filteredProducts.length}</strong> handcrafted products</span>
          {(selectedCategory !== 'All' || searchQuery || maxPriceUSD < 300) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setMaxPriceUSD(300);
              }}
              className="text-[#C95B4A] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center space-y-3">
            <div className="text-4xl">🔍</div>
            <h3 className="text-lg font-serif font-bold text-[#2D2727]">No Craft Products Found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              Try adjusting your price range filter or search term to discover more items.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setMaxPriceUSD(300);
              }}
              className="bg-[#C95B4A] text-white font-semibold px-5 py-2 rounded-full text-xs"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductForModal(product)}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 border border-[#E88D7D]/20 shadow-sm hover:shadow-xl"
                >
                  {/* Image Header Container */}
                  <div className="relative aspect-[4/5] w-full bg-[#FAF6F0] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.isTrending && (
                        <span className="bg-[#8E2020] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                          🔥 Trending
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                          ⭐ Best Seller
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-transform active:scale-95"
                      title="Add to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-[#8E2020] text-[#8E2020]' : 'text-gray-600 hover:text-[#8E2020]'
                        }`}
                      />
                    </button>

                    {/* Quick View Button on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProductForModal(product);
                        }}
                        className="w-full bg-white/90 hover:bg-white backdrop-blur-md text-[#2D2727] text-xs font-bold py-2 rounded-xl shadow-md flex items-center justify-center gap-1.5 border border-white"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View & Customize</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-gray-500">
                        <span className="uppercase tracking-wider font-semibold text-[#C95B4A]">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 font-semibold text-amber-600">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-serif font-bold text-[#2D2727] line-clamp-1 group-hover:text-[#C95B4A] transition-colors">
                        {product.title}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-3">
                      {/* Price Tag */}
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-gray-500 font-medium">Price:</span>
                        <span className="text-lg font-serif font-extrabold text-[#8E2020]">
                          {formatPrice(product.priceUSD, product.priceINR)}
                        </span>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          className="w-full bg-[#FAF6F0] hover:bg-[#C95B4A] text-[#8E2020] hover:text-white border border-[#E88D7D]/40 font-semibold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>

                        <button
                          onClick={(e) => handleWhatsAppOrderSingle(product, e)}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-xs flex items-center justify-center gap-1 shadow-sm whatsapp-glow transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Inquire</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
