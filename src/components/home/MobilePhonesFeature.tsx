import Link from "next/link";
import { MessageCircle, Zap } from "lucide-react";

export function MobilePhonesFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          
          {/* Abstract Visuals */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Content */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-5 h-5 text-electric-blue" />
              <span className="text-electric-blue font-bold tracking-widest uppercase text-sm">Featured Category</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Looking for a New Smartphone?
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We offer the latest smartphones from popular brands including Apple, Samsung, and Xiaomi. Contact our team to check current stock and available purchasing options.
            </p>
            
            <ul className="space-y-4 mb-10 text-gray-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></span> Flexible Cash Purchases</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></span> Convenient Installment Options Available</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></span> 100% Original Products</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/installments?category=Mobile%20Phones"
                className="bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors text-center"
              >
                Apply for Installment
              </Link>
              <a 
                href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20Mobile%20Phones.%20Please%20send%20me%20available%20options%2C%20prices%20and%20installment%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Visual Creative Area */}
          <div className="lg:w-1/2 bg-gray-900 relative flex items-center justify-center p-10 min-h-[400px]">
            {/* Using a premium abstract visual representation instead of a specific product image to avoid showing fixed inventory */}
            <div className="w-full max-w-sm aspect-[9/16] bg-gradient-to-tr from-gray-800 to-gray-700 rounded-3xl border-4 border-gray-800 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="w-24 h-6 bg-black rounded-b-xl absolute top-0"></div>
              
              <div className="relative z-10 text-center p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl">
                <span className="text-white font-bold tracking-widest text-xs uppercase mb-1 block">Prices on</span>
                <span className="text-electric-blue font-black text-2xl uppercase">Request</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
