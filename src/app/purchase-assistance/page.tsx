"use client";

import { useState } from "react";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PurchaseAssistancePage() {
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
            Thank you. Your purchase assistance request has been submitted. Our team will review the details and contact you shortly regarding the verification and approval process.
          </p>
          <Link href="/" className="inline-block bg-navy hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
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
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">Found Your Product Somewhere Else?</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you have found a product from another seller or store, contact Pak Zone Electronics to discuss whether we can assist with the payment for your purchase, subject to applicable terms, verification and approval.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-purple-50 p-6 border-b border-purple-100">
              <p className="text-sm text-purple-800 font-medium text-center">
                <strong>Note:</strong> Not every external purchase is automatically financed. All requests are subject to internal verification and business approval.
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-navy border-b pb-2">Your Contact Details</h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" placeholder="03XXXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                      <input required type="text" defaultValue="Islamabad" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" />
                    </div>
                  </div>

                  {/* Purchase Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-navy border-b pb-2">External Purchase Details</h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Product You Want to Buy *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Exact product name/model" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Seller / Store Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Name of the external store" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Agreed/Estimated Price (Rs.) *</label>
                      <input required type="number" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g. 150000" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information (Store location, seller contact, etc.)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none resize-none" placeholder="Please provide any details that can help us verify the seller and product..."></textarea>
                </div>

                <div className="pt-6 border-t flex justify-end">
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-md text-lg"
                  >
                    Request Purchase Assistance
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
