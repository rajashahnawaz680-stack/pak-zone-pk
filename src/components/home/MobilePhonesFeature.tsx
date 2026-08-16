import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export function MobilePhonesFeature() {
  const brands = ["iPhone", "Samsung", "Xiaomi", "Oppo", "Vivo", "Tecno", "Infinix", "Other Brands"];
  
  // Placeholder mock data
  const mockPhones = [
    { id: 1, brand: "Apple", model: "iPhone 15 Pro", specs: "256GB, Titanium", price: "450,000", installment: true },
    { id: 2, brand: "Samsung", model: "Galaxy S24 Ultra", specs: "512GB, Titanium", price: "400,000", installment: true },
    { id: 3, brand: "Xiaomi", model: "Redmi Note 13 Pro", specs: "256GB, 8GB RAM", price: "75,000", installment: true },
    { id: 4, brand: "Infinix", model: "Note 40 Pro", specs: "256GB, 8GB RAM", price: "69,999", installment: true },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Latest Smartphones</h2>
            <p className="text-gray-600">Available on Cash or Flexible Installment Options.</p>
          </div>
          <Link href="/categories/mobile-phones" className="text-electric-blue font-semibold hover:text-bright-blue mt-4 md:mt-0 inline-flex items-center">
            View All Phones &rarr;
          </Link>
        </div>

        {/* Brand filter chips */}
        <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar">
          {brands.map((brand, idx) => (
            <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${idx === 0 ? 'bg-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {brand}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockPhones.map((phone) => (
            <div key={phone.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-[4/5] bg-gray-50 p-6 flex items-center justify-center relative">
                <div className="absolute top-3 left-3 bg-success-green/10 text-success-green text-xs font-bold px-2 py-1 rounded">
                  Installment Available
                </div>
                {/* Mock image placeholder */}
                <div className="w-24 h-48 bg-gray-200 rounded-md border-4 border-gray-300 shadow-sm"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{phone.brand}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{phone.model}</h3>
                <p className="text-sm text-gray-500 mb-4">{phone.specs}</p>
                <div className="mt-auto mb-4">
                  <p className="text-xs text-gray-500 mb-1">Cash Price</p>
                  <p className="text-xl font-bold text-navy">Rs. {phone.price}</p>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <Link href={`/installments?product=${encodeURIComponent(phone.model)}`} className="w-full bg-electric-blue hover:bg-bright-blue text-white text-sm font-semibold py-2.5 rounded flex items-center justify-center transition-colors">
                    <FileText className="w-4 h-4 mr-2" /> Apply for Installment
                  </Link>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-navy text-sm font-semibold py-2 rounded transition-colors">
                      Enquire
                    </button>
                    <a href={`https://wa.me/923165747971?text=Hi%2C%20I%20am%20interested%20in%20the%20${phone.model}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-success-green/10 hover:bg-success-green/20 text-success-green text-sm font-semibold py-2 rounded flex items-center justify-center transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
