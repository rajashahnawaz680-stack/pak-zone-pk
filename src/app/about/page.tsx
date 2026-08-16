import Link from "next/link";
import { CheckCircle2, Award, Users, ThumbsUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About <span className="text-electric-blue">Pak Zone Electronics</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            An established electronics and installment-based retail business serving customers with a wide range of products and flexible purchasing options.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                With approximately <strong className="text-navy">15–20 years of experience</strong>, Pak Zone Electronics has developed a customer-focused approach to providing essential electronics, mobile phones, home appliances, bikes, scooters, solar solutions, and more.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Customers can explore our vast range of products through straightforward cash purchase or applicable installment options. We also assist customers regarding product requests and purchase assistance if they find a product from another seller.
              </p>
              <div className="bg-electric-blue/10 border-l-4 border-electric-blue p-6 rounded-r-lg mt-8">
                <h3 className="font-bold text-navy text-xl mb-2">Our Goal Is Simple:</h3>
                <p className="text-electric-blue font-medium italic">
                  "Make it easier for customers to access the products they need through convenient purchasing options and dependable customer support."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Image Placeholders / Stats */}
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center aspect-square">
                <Award className="w-10 h-10 text-electric-blue mb-3" />
                <h4 className="text-2xl font-bold text-navy">15+ Years</h4>
                <p className="text-sm text-gray-500">Industry Experience</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center aspect-square translate-y-8">
                <Users className="w-10 h-10 text-success-green mb-3" />
                <h4 className="text-2xl font-bold text-navy">3 Branches</h4>
                <p className="text-sm text-gray-500">Across the City</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center aspect-square">
                <ThumbsUp className="w-10 h-10 text-purple-500 mb-3" />
                <h4 className="text-2xl font-bold text-navy">Thousands</h4>
                <p className="text-sm text-gray-500">Satisfied Customers</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 flex flex-col items-center justify-center aspect-square translate-y-8">
                <CheckCircle2 className="w-10 h-10 text-orange-500 mb-3" />
                <h4 className="text-2xl font-bold text-navy">Wide Range</h4>
                <p className="text-sm text-gray-500">Of Premium Products</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Ready to find your next product?</h2>
          <div className="flex justify-center space-x-4">
            <Link href="/shop" className="bg-electric-blue hover:bg-bright-blue text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Explore Shop
            </Link>
            <Link href="/installments" className="bg-white border border-gray-300 text-navy hover:bg-gray-50 px-8 py-3 rounded-md font-semibold transition-colors">
              View Installments
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
