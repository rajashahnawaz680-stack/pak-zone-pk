"use client";

import { useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProductRequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success-green" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Request Received</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you. Your product request has been submitted. Our team will review the details and contact you shortly regarding availability and options.
          </p>
          <Link 
            href="/"
            className="inline-block bg-navy hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-electric-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">Can&apos;t Find What You&apos;re Looking For?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us what product you are looking for and our team can review your request and help you get it through cash or available installment options.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-navy border-b pb-2">Your Contact Details</h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="03XXXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Same as mobile number" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Branch *</label>
                      <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                        <option value="jinnah-garden">Jinnah Garden, Islamabad</option>
                        <option value="branch-2">Branch 2</option>
                        <option value="branch-3">Branch 3</option>
                      </select>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-navy border-b pb-2">Product Details</h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name & Model *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Exactly what are you looking for?" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Brand *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="e.g. Samsung, HP" />
                    </div>
                    {/* Removed Estimated Price to align with new model */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Purchase Type *</label>
                      <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                        <option value="installment">Installment</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none resize-none" placeholder="Color preference, specific specs, or any other details..."></textarea>
                </div>

                <div className="pt-6 border-t flex justify-end">
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-electric-blue text-white font-bold rounded-lg hover:bg-bright-blue transition-colors shadow-md text-lg"
                  >
                    Request This Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
