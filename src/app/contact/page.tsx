"use client";

import { useState } from "react";
import { Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">Need Help Choosing the Right Product?</h1>
          <p className="text-lg text-gray-600">
            Contact Pak Zone Electronics for product enquiries, installment requests, purchase assistance and general questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start space-x-4">
              <div className="bg-electric-blue/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-electric-blue" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Call Us</h3>
                <div className="space-y-2">
                  <a href="tel:03085966696" className="block text-gray-600 hover:text-electric-blue font-semibold">0308 5966696</a>
                  <a href="tel:03165747971" className="block text-gray-600 hover:text-electric-blue font-semibold">0316 5747971</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start space-x-4">
              <div className="bg-success-green/10 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-success-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">WhatsApp</h3>
                <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-success-green font-semibold">
                  0316 5747971
                </a>
                <p className="text-sm text-gray-500 mt-1">Fastest response time.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-start space-x-4">
              <div className="bg-navy/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Main Branch</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Office No. 23, Emporium Plaza, Lower Ground, Near Pakeeza Cash & Carry, Phase 1 Jinnah Garden, Islamabad, Pakistan
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy mb-8">Send an Enquiry</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-success-green" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-electric-blue font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Your phone number" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Your email (optional)" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                        <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                          <option value="">Select a subject</option>
                          <option value="product">Product Enquiry</option>
                          <option value="installment">Installment Details</option>
                          <option value="assistance">Purchase Assistance</option>
                          <option value="other">General Question</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none resize-none" placeholder="How can we help you?"></textarea>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <button 
                        type="submit"
                        className="px-8 py-4 bg-navy hover:bg-gray-800 text-white font-bold rounded-lg transition-colors shadow-md w-full md:w-auto"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
