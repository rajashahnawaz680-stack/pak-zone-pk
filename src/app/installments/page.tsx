"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";

function InstallmentForm() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || "";
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    city: "Islamabad",
    category: initialCategory,
    preference: "Installment",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100 mx-auto">
        <div className="w-20 h-20 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success-green" />
        </div>
        <h2 className="text-3xl font-bold text-navy mb-4">Application Submitted</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you. Our team will contact you shortly to discuss the available options.
        </p>
        <Link 
          href="/"
          className="inline-block bg-navy hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
      <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-navy px-8 py-6 border-b-4 border-electric-blue flex items-center">
          <FileText className="w-6 h-6 text-electric-blue mr-3" />
          <h2 className="text-2xl font-bold text-white">Application Form</h2>
        </div>
        
        <div className="p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Details */}
            <div>
              <h3 className="text-lg font-bold text-navy border-b pb-2 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="03XXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" placeholder="Same as phone number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none" />
                </div>
              </div>
            </div>

            {/* Product Interest */}
            <div>
              <h3 className="text-lg font-bold text-navy border-b pb-2 mb-4">What Are You Looking For?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                    <option value="">Select Category</option>
                    <option value="Mobile Phones">Mobile Phone</option>
                    <option value="Laptops">Laptop</option>
                    <option value="AC">AC</option>
                    <option value="Refrigerator">Refrigerator</option>
                    <option value="Washing Machine">Washing Machine</option>
                    <option value="Home Appliances">Home Appliance</option>
                    <option value="Bikes">Bike</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Solar">Solar System</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Purchase Preference *</label>
                  <select required name="preference" value={formData.preference} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none bg-white">
                    <option value="Installment">Installment</option>
                    <option value="Cash">Cash</option>
                    <option value="Need Advice">Need Advice</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-electric-blue outline-none resize-none" placeholder="Any specific brand, model, or details we should know?"></textarea>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-electric-blue text-white font-bold text-lg rounded-xl hover:bg-bright-blue transition-colors shadow-lg"
            >
              Submit Request
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree that our team may contact you via phone or WhatsApp regarding your enquiry.
            </p>
          </form>
        </div>
      </div>

      <div className="lg:w-1/3">
        <div className="bg-navy text-white rounded-2xl p-8 shadow-xl sticky top-24 border border-gray-800">
          <h4 className="font-bold text-xl mb-6">Why Apply Online?</h4>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="bg-electric-blue/20 p-2 rounded-lg mr-4">
                <span className="text-electric-blue font-bold">1</span>
              </div>
              <div>
                <h5 className="font-bold">Fast Processing</h5>
                <p className="text-sm text-gray-400 mt-1">Submit your details so our team can prepare options before contacting you.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-electric-blue/20 p-2 rounded-lg mr-4">
                <span className="text-electric-blue font-bold">2</span>
              </div>
              <div>
                <h5 className="font-bold">Personalized Advice</h5>
                <p className="text-sm text-gray-400 mt-1">We'll discuss the best available purchasing options for your specific requirement.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-electric-blue/20 p-2 rounded-lg mr-4">
                <span className="text-electric-blue font-bold">3</span>
              </div>
              <div>
                <h5 className="font-bold">Transparent Communication</h5>
                <p className="text-sm text-gray-400 mt-1">Direct support without automated bots. Speak with a real team member.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function InstallmentsPage() {
  return (
    <div className="bg-gray-50 min-h-[80vh] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Enquire Now</h1>
          <p className="text-lg text-gray-600">
            Tell us what you're looking for, and our team will get back to you with the latest options, pricing, and available installment plans.
          </p>
        </div>
        
        <Suspense fallback={<div className="text-center py-20">Loading form...</div>}>
          <InstallmentForm />
        </Suspense>
      </div>
    </div>
  );
}
