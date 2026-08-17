"use client";

import Link from "next/link";
import { Phone, PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            Pak Zone <span className="text-electric-blue">Electronics</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="hover:text-electric-blue transition-colors text-sm font-medium">Home</Link>
          <Link href="/what-we-offer" className="hover:text-electric-blue transition-colors text-sm font-medium">What We Offer</Link>
          <Link href="/installments" className="hover:text-electric-blue transition-colors text-sm font-medium">Installments</Link>
          <Link href="/how-it-works" className="hover:text-electric-blue transition-colors text-sm font-medium">How It Works</Link>
          <Link href="/about" className="hover:text-electric-blue transition-colors text-sm font-medium">About Us</Link>
          <Link href="/branches" className="hover:text-electric-blue transition-colors text-sm font-medium">Branches</Link>
          <Link href="/faq" className="hover:text-electric-blue transition-colors text-sm font-medium">FAQs</Link>
          <Link href="/contact" className="hover:text-electric-blue transition-colors text-sm font-medium">Contact</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:03085966696" className="flex items-center space-x-2 hover:text-electric-blue transition-colors">
            <PhoneCall className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-semibold">0308 5966696</span>
          </a>
          <Link href="/installments" className="bg-electric-blue hover:bg-bright-blue text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-sm">
            Apply for Installment
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
        <div className="lg:hidden bg-navy border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/what-we-offer" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>What We Offer</Link>
            <Link href="/installments" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Installments</Link>
            <Link href="/how-it-works" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link href="/about" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/branches" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Branches</Link>
            <Link href="/faq" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
            <Link href="/contact" className="text-white hover:text-electric-blue" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
              <a href="tel:03085966696" className="flex items-center space-x-2 text-white">
                <PhoneCall className="w-5 h-5 text-electric-blue" />
                <span>Call: 0308 5966696</span>
              </a>
              <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                <Phone className="w-5 h-5 text-success-green" />
                <span>WhatsApp: 0316 5747971</span>
              </a>
              <Link href="/installments" className="bg-electric-blue text-center text-white px-4 py-2.5 rounded-md font-semibold mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                Apply for Installment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
