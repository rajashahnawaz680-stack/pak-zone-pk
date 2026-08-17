import { CategoryGrid } from "@/components/home/CategoryGrid";
import { MobilePhonesFeature } from "@/components/home/MobilePhonesFeature";
import { VisualShowcaseSections } from "@/components/home/VisualShowcaseSections";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export const metadata = {
  title: "What We Offer | Pak Zone Electronics",
  description: "Explore the wide range of electronics, mobile phones, home appliances, bikes, scooters and solar systems available at Pak Zone Electronics in Islamabad.",
};

export default function WhatWeOfferPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-navy pt-24 pb-16 border-b-4 border-electric-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Explore Our Products</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From the latest smartphones to complete home solar systems, explore our premium product categories and contact our team for current pricing and installment options.
          </p>
        </div>
      </div>

      {/* Reusing Home Components for visual consistency */}
      <div className="pt-10">
        <CategoryGrid />
      </div>

      <MobilePhonesFeature />
      
      <VisualShowcaseSections />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Ready to Enquire?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Found what you're looking for or need help deciding? Contact us today to check availability, prices, and available cash or installment plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/installments"
              className="bg-navy hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-3" />
              Apply for Installment
            </Link>
            <a 
              href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
