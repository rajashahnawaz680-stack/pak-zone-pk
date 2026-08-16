"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MessageCircle, FileText, PhoneCall, Check, Info } from "lucide-react";
import { InstallmentCalculator } from "@/components/calculator/InstallmentCalculator";

export default function ProductDetailPage() {
  const params = useParams();
  // We mock the product details for the UI. Normally we'd fetch this based on params.slug/id
  
  const product = {
    id: params?.slug || "1",
    name: "iPhone 15 Pro Max 256GB Titanium",
    brand: "Apple",
    category: "Mobile Phones",
    cash_price: "450,000",
    installment_available: true,
    description: "The iPhone 15 Pro Max features a strong and lightweight titanium design with new contoured edges, a new Action button, powerful camera upgrades, and A17 Pro for next-level performance and mobile gaming.",
    features: [
      "6.7-inch Super Retina XDR display with ProMotion",
      "A17 Pro chip with 6-core GPU",
      "Pro camera system (48MP Main, 12MP Ultrawide, 12MP 5x Telephoto)",
      "Titanium with textured matte glass back",
      "Action button to customize your experience",
      "USB-C connector with USB 3 speeds",
    ],
    stock_status: "In Stock"
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-electric-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-electric-blue transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/categories/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-electric-blue transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Product Images (Left) */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col items-center">
              <div className="w-full max-w-md aspect-square bg-gray-100 rounded-xl flex items-center justify-center relative mb-6">
                {product.installment_available && (
                  <div className="absolute top-4 left-4 bg-electric-blue text-white text-sm font-bold px-3 py-1.5 rounded shadow-sm">
                    Installment Available
                  </div>
                )}
                {/* Main image placeholder */}
                <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-inner border border-gray-300"></div>
              </div>
              <div className="flex space-x-4">
                {[1, 2, 3].map((thumb) => (
                  <div key={thumb} className={`w-20 h-20 rounded-lg cursor-pointer flex items-center justify-center border-2 ${thumb === 1 ? 'border-electric-blue' : 'border-transparent bg-gray-100'}`}>
                    <div className="w-12 h-16 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info (Right) */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{product.brand}</span>
                  <span className="text-xs bg-success-green/10 text-success-green px-2 py-1 rounded font-semibold flex items-center">
                    <Check className="w-3 h-3 mr-1" /> {product.stock_status}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline space-x-3 mt-4">
                  <span className="text-gray-500 text-lg">Cash Price:</span>
                  <span className="text-4xl font-black text-navy">Rs. {product.cash_price}</span>
                </div>
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-10">
                {product.installment_available && (
                  <Link 
                    href={`/installments?product=${encodeURIComponent(product.name)}`}
                    className="w-full bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-electric-blue/30 transition-transform transform hover:-translate-y-1 flex items-center justify-center text-lg"
                  >
                    <FileText className="w-6 h-6 mr-3" /> Apply for Installment
                  </Link>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href={`https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-success-green hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Ask on WhatsApp
                  </a>
                  <a 
                    href="tel:03085966696"
                    className="w-full bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold py-3.5 px-6 rounded-xl shadow-sm flex items-center justify-center transition-colors"
                  >
                    <PhoneCall className="w-5 h-5 mr-2" /> Cash Enquiry
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-900 p-4 rounded-xl flex items-start space-x-3">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-700" />
                <p className="text-sm font-medium leading-relaxed">
                  Prices and installment terms are subject to change based on market conditions. Final approval for installments requires document verification at our branch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications and Calculator Section */}
        <div className="mt-12 grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-navy mb-6 pb-4 border-b border-gray-100">Key Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <InstallmentCalculator />
          </div>
        </div>

      </div>
    </div>
  );
}
