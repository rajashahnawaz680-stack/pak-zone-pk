"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, SlidersHorizontal, MessageCircle, FileText } from "lucide-react";

export default function ShopPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Mock Products
  const mockProducts = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", category: "Mobile Phones", price: "450,000", installment: true },
    { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", category: "Mobile Phones", price: "400,000", installment: true },
    { id: 3, name: "Dawlance Refrigerator 91999 Avante+", brand: "Dawlance", category: "Refrigerators", price: "145,000", installment: true },
    { id: 4, name: "Haier 1.5 Ton Inverter AC", brand: "Haier", category: "AC & Coolers", price: "185,000", installment: true },
    { id: 5, name: "HP 15s Core i5 12th Gen", brand: "HP", category: "Laptops", price: "155,000", installment: true },
    { id: 6, name: "Honda CD 70 Dream", brand: "Honda", category: "Bikes & Scooters", price: "168,900", installment: true },
    { id: 7, name: "Redmi Note 13 Pro", brand: "Xiaomi", category: "Mobile Phones", price: "75,000", installment: true },
    { id: 8, name: "Orient 43 Inch Smart TV", brand: "Orient", category: "Other Electronics", price: "80,000", installment: false },
    { id: 9, name: "Tariq Solar 3KW System", brand: "Tariq", category: "Solar Systems", price: "450,000", installment: true },
  ];

  const categories = ["All", "Mobile Phones", "Laptops", "AC & Coolers", "Refrigerators", "Home Appliances", "Bikes & Scooters", "Solar Systems"];
  const brands = ["All", "Apple", "Samsung", "Xiaomi", "Haier", "Dawlance", "HP", "Honda"];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* Page Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop Our Products</h1>
          <p className="text-gray-300 max-w-2xl">Browse our extensive catalog of electronics, mobiles, appliances, and more. Available on cash or easy installments.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-full bg-white border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 space-x-2"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>{isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>

          {/* Sidebar Filters */}
          <aside className={`w-full md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="font-bold text-lg text-navy mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-electric-blue" />
                Filters
              </h3>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search products..." className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-electric-blue outline-none text-sm" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <ul className="space-y-2">
                    {categories.map((cat, idx) => (
                      <li key={idx}>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input type="radio" name="category" defaultChecked={idx === 0} className="text-electric-blue focus:ring-electric-blue" />
                          <span className="text-sm text-gray-600 group-hover:text-electric-blue transition-colors">{cat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                  <ul className="space-y-2">
                    {brands.map((brand, idx) => (
                      <li key={idx}>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input type="radio" name="brand" defaultChecked={idx === 0} className="text-electric-blue focus:ring-electric-blue" />
                          <span className="text-sm text-gray-600 group-hover:text-electric-blue transition-colors">{brand}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Options */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Purchasing Options</label>
                  <label className="flex items-center space-x-2 cursor-pointer mb-2">
                    <input type="checkbox" className="rounded text-electric-blue focus:ring-electric-blue" />
                    <span className="text-sm text-gray-600">Installment Available</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-electric-blue focus:ring-electric-blue" defaultChecked />
                    <span className="text-sm text-gray-600">In Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 text-sm">Showing {mockProducts.length} results</p>
              <select className="border border-gray-300 rounded-md text-sm py-1.5 pl-3 pr-8 focus:ring-electric-blue outline-none bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
                  <div className="aspect-[4/3] bg-gray-100 p-6 flex items-center justify-center relative">
                    {product.installment && (
                      <div className="absolute top-3 left-3 bg-electric-blue text-white text-xs font-bold px-2 py-1 rounded">
                        Installment Available
                      </div>
                    )}
                    {/* Mock image placeholder */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg group-hover:scale-105 transition-transform duration-300"></div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{product.brand}</p>
                      <p className="text-xs text-electric-blue font-medium bg-electric-blue/10 px-2 py-0.5 rounded truncate ml-2 max-w-[100px]">{product.category}</p>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2">{product.name}</h3>
                    <div className="mt-auto mb-4">
                      <p className="text-xs text-gray-500 mb-1">Cash Price</p>
                      <p className="text-xl font-bold text-navy">Rs. {product.price}</p>
                    </div>
                    <div className="flex flex-col space-y-2 mt-auto">
                      <Link href={`/product/${product.id}`} className="w-full bg-navy hover:bg-gray-800 text-white text-sm font-semibold py-2.5 rounded flex items-center justify-center transition-colors">
                        View Details
                      </Link>
                      <div className="grid grid-cols-2 gap-2">
                        {product.installment && (
                          <Link href={`/installments?product=${encodeURIComponent(product.name)}`} className="bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue text-xs font-semibold py-2 rounded flex items-center justify-center transition-colors">
                            <FileText className="w-3 h-3 mr-1" /> Apply Now
                          </Link>
                        )}
                        <a href={`https://wa.me/923165747971?text=Hi%2C%20I%20am%20interested%20in%20${product.name}`} target="_blank" rel="noopener noreferrer" className={`${product.installment ? 'bg-success-green/10 hover:bg-success-green/20 text-success-green' : 'col-span-2 bg-success-green hover:bg-green-600 text-white'} text-xs font-semibold py-2 rounded flex items-center justify-center transition-colors`}>
                          <MessageCircle className="w-3 h-3 mr-1" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
