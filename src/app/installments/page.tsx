"use client";

import { useState } from "react";
import Link from "next/link";
import { InstallmentCalculator } from "@/components/calculator/InstallmentCalculator";
import { CheckCircle2 } from "lucide-react";

export default function InstallmentsPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-success-green" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Application Submitted</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you. Your request has been received. Our team will review your application and contact you shortly regarding the available options.
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
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Installment Application</h1>
          <p className="text-lg text-gray-600">
            Apply online in minutes. Please provide accurate information so our team can process your request efficiently.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Main Form Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Progress Steps */}
            <div className="bg-navy px-8 py-6">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors ${
                      step >= s ? 'bg-electric-blue text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {s}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${step >= s ? 'text-white' : 'text-gray-400'}`}>
                      {s === 1 ? 'Personal' : s === 2 ? 'Product' : s === 3 ? 'Income' : 'Additional'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-1 bg-gray-700 rounded-full mt-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-electric-blue rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-navy border-b pb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
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
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                        <input required type="text" defaultValue="Islamabad" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" />
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
                  </div>
                )}

                {/* STEP 2: Product Information */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-navy border-b pb-4">Product Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category *</label>
                        <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                          <option value="">Select Category</option>
                          <option value="mobile">Mobile Phones</option>
                          <option value="laptop">Laptops</option>
                          <option value="appliance">Home Appliances</option>
                          <option value="bike">Bikes & Scooters</option>
                          <option value="solar">Solar Systems</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Brand *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="e.g. Samsung, Haier" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name / Model *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Exact product name or model" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Price (Rs.)</label>
                        <input type="number" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="e.g. 150000" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Purchase Type *</label>
                        <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                          <option value="installment">Installment</option>
                          <option value="cash">Cash</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Income Information */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-navy border-b pb-4">Employment / Income Info</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Type *</label>
                        <select required className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                          <option value="">Select Type</option>
                          <option value="salaried">Salaried</option>
                          <option value="business">Business Owner</option>
                          <option value="freelancer">Freelancer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Income (Rs.) *</label>
                        <input required type="number" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Average monthly income" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Business / Company Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Where you work or your business name" />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Additional Information */}
                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-navy border-b pb-4">Additional Information</h3>
                    <div className="grid md:grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Payment Plan</label>
                        <select className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                          <option value="3">3 Months</option>
                          <option value="6">6 Months</option>
                          <option value="12">12 Months</option>
                          <option value="18">18 Months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none resize-none" placeholder="Any specific requirements or questions?"></textarea>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input required type="checkbox" className="mt-1 w-5 h-5 text-electric-blue rounded border-gray-300 focus:ring-electric-blue" />
                          <span className="text-sm text-gray-700 leading-relaxed font-medium">
                            I confirm that the information provided is accurate and understand that my request is subject to review, verification, and applicable terms.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10 pt-6 border-t">
                  {step > 1 ? (
                    <button 
                      type="button" 
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-electric-blue text-white font-bold rounded-lg hover:bg-bright-blue transition-colors shadow-md flex items-center"
                  >
                    {step < 4 ? 'Continue' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Calculator Sidebar */}
          <div className="lg:w-1/3">
            <InstallmentCalculator />
            
            <div className="mt-6 bg-navy text-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 text-success-green mr-2" /> Application Process</h4>
              <ul className="space-y-3 text-sm text-gray-300 mt-4">
                <li className="flex items-start"><span className="text-electric-blue mr-2">1.</span> Submit this form online.</li>
                <li className="flex items-start"><span className="text-electric-blue mr-2">2.</span> Our team will review the details.</li>
                <li className="flex items-start"><span className="text-electric-blue mr-2">3.</span> We&apos;ll contact you with options.</li>
                <li className="flex items-start"><span className="text-electric-blue mr-2">4.</span> Visit branch for final process.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
