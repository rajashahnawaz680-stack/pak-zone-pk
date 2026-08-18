"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Pak Zone <span className="text-electric-blue">Electronics</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <Link href="/" className="hover:text-electric-blue transition-colors text-sm font-medium">Home</Link>
          <Link href="/about" className="hover:text-electric-blue transition-colors text-sm font-medium">About Us</Link>
          
          {/* Categories Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button className="flex items-center hover:text-electric-blue transition-colors text-sm font-medium py-2">
              Categories <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            
            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-48 bg-white text-navy shadow-xl rounded-b-lg overflow-hidden border-t-2 border-electric-blue animate-in slide-in-from-top-2">
                <Link href="/category/mobiles" className="block px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100">Mobiles</Link>
                <Link href="/category/laptops" className="block px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100">Laptops</Link>
                <Link href="/category/bikes" className="block px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100">Bikes</Link>
                <Link href="/category/scooters" className="block px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100">Electric Scooters</Link>
                <Link href="/category/electronics" className="block px-4 py-3 hover:bg-gray-50 text-sm border-b border-gray-100">Electronics</Link>
                <Link href="/category/home-appliances" className="block px-4 py-3 hover:bg-gray-50 text-sm">Home Appliances</Link>
              </div>
            )}
          </div>
          
          <Link href="/category/mobiles" className="hover:text-electric-blue transition-colors text-sm font-medium hidden xl:block">Mobiles</Link>
          <Link href="/category/laptops" className="hover:text-electric-blue transition-colors text-sm font-medium hidden xl:block">Laptops</Link>
          <Link href="/category/bikes" className="hover:text-electric-blue transition-colors text-sm font-medium hidden xl:block">Bikes</Link>
          <Link href="/category/home-appliances" className="hover:text-electric-blue transition-colors text-sm font-medium hidden xl:block">Appliances</Link>
          <Link href="/contact" className="hover:text-electric-blue transition-colors text-sm font-medium">Contact Us</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          <Link href="/contact" className="bg-electric-blue hover:bg-bright-blue text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-sm flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Visit Our Store
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-electric-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-gray-800 absolute w-full left-0 shadow-xl h-screen overflow-y-auto pb-32">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            <Link href="/" className="text-white hover:text-electric-blue text-lg font-medium border-b border-gray-800 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-white hover:text-electric-blue text-lg font-medium border-b border-gray-800 pb-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            
            <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mt-4">Shop Categories</div>
            <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-800">
              <Link href="/category/mobiles" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Mobile Phones</Link>
              <Link href="/category/laptops" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Laptops & Computers</Link>
              <Link href="/category/bikes" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Bikes / Motorcycles</Link>
              <Link href="/category/scooters" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Electric Scooters</Link>
              <Link href="/category/electronics" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Electronics & Accessories</Link>
              <Link href="/category/home-appliances" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Home Appliances</Link>
            </div>

            <Link href="/contact" className="text-white hover:text-electric-blue text-lg font-medium border-b border-gray-800 pb-2 pt-4" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            
            <div className="pt-6 flex flex-col space-y-3">
              <Link href="/contact" className="bg-electric-blue text-center text-white px-4 py-3 rounded-lg font-bold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
