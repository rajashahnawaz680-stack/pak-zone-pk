import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export function FeaturedProducts() {
  const mockProducts = [
    { id: 1, name: "Dawlance Refrigerator 91999 Avante+", brand: "Dawlance", category: "Refrigerators", price: "145,000", installment: true },
    { id: 2, name: "Haier 1.5 Ton Inverter AC", brand: "Haier", category: "AC & Coolers", price: "185,000", installment: true },
    { id: 3, name: "HP 15s Core i5 12th Gen", brand: "HP", category: "Laptops", price: "155,000", installment: true },
    { id: 4, name: "Honda CD 70 Dream", brand: "Honda", category: "Bikes & Scooters", price: "168,900", installment: true },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover top-rated appliances, laptops, and vehicles available now.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
              <div className="aspect-square bg-gray-100 p-6 flex items-center justify-center relative">
                {product.installment && (
                  <div className="absolute top-3 left-3 bg-electric-blue text-white text-xs font-bold px-2 py-1 rounded">
                    Installment Available
                  </div>
                )}
                {/* Mock image placeholder */}
                <div className="w-32 h-32 bg-gray-200 rounded-lg group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{product.brand}</p>
                  <p className="text-xs text-electric-blue font-medium bg-electric-blue/10 px-2 py-0.5 rounded">{product.category}</p>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2">{product.name}</h3>
                <div className="mt-auto mb-4">
                  <p className="text-xl font-bold text-navy">Rs. {product.price}</p>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <Link href={`/product/${product.id}`} className="w-full bg-navy hover:bg-gray-800 text-white text-sm font-semibold py-2 rounded flex items-center justify-center transition-colors">
                    View Details
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href={`/installments?product=${encodeURIComponent(product.name)}`} className="bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue text-xs font-semibold py-2 rounded flex items-center justify-center transition-colors">
                      <FileText className="w-3 h-3 mr-1" /> Apply Now
                    </Link>
                    <a href={`https://wa.me/923165747971?text=Hi%2C%20I%20am%20interested%20in%20${product.name}`} target="_blank" rel="noopener noreferrer" className="bg-success-green/10 hover:bg-success-green/20 text-success-green text-xs font-semibold py-2 rounded flex items-center justify-center transition-colors">
                      <MessageCircle className="w-3 h-3 mr-1" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/shop" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-navy bg-white hover:bg-gray-50 transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
