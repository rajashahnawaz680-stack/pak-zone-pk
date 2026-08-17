import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Explore What We Offer</h2>
          <p className="text-gray-600 text-lg">
            From everyday electronics to major purchases, explore the categories available through Pak Zone Electronics.
          </p>
        </div>

        {/* Editorial Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[600px]">
          
          {/* Large Card: Mobile Phones */}
          <div className="md:col-span-1 md:row-span-2 group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-navy shadow-lg aspect-[3/4] md:aspect-auto">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 lg:p-8">
              <span className="text-xs font-bold tracking-widest text-electric-blue uppercase mb-2">Smartphones</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Upgrade Your Everyday</h3>
              <p className="text-gray-200 text-sm mb-6 max-w-xs">Smartphones from popular brands with cash and available installment options.</p>
              <div className="flex flex-col gap-3">
                <Link href="/installments?category=Mobile%20Phones" className="w-full bg-white text-navy hover:bg-gray-100 font-bold py-3 px-4 rounded-lg text-center transition-colors text-sm">
                  Enquire Now
                </Link>
                <a href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20Mobile%20Phones.%20Please%20send%20me%20the%20available%20options%2C%20current%20price%20and%20installment%20details." target="_blank" rel="noopener noreferrer" className="w-full bg-success-green/20 hover:bg-success-green/30 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors text-sm border border-success-green/30">
                  <MessageCircle className="w-4 h-4 mr-2" /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Medium Card 1: Laptops */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg aspect-video md:aspect-auto">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-widest text-electric-blue uppercase mb-1">Laptops</span>
              <h3 className="text-2xl font-bold text-white mb-2">Power Your Work & Study</h3>
              <div className="mt-4 flex gap-2">
                <Link href="/installments?category=Laptops" className="bg-white text-navy hover:bg-gray-100 font-bold py-2 px-4 rounded-lg text-xs transition-colors">Ask for Details</Link>
              </div>
            </div>
          </div>

          {/* Medium Card 2: Home Appliances */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-navy shadow-lg aspect-video md:aspect-auto">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-widest text-electric-blue uppercase mb-1">Home Appliances</span>
              <h3 className="text-2xl font-bold text-white mb-2">Upgrade Your Living Space</h3>
              <div className="mt-4 flex gap-2">
                <Link href="/installments?category=Home%20Appliances" className="bg-white text-navy hover:bg-gray-100 font-bold py-2 px-4 rounded-lg text-xs transition-colors">Explore Options</Link>
              </div>
            </div>
          </div>

          {/* Small Card 1: Bikes & Scooters */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg aspect-video md:aspect-auto">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/60 transition-colors"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <span className="text-[10px] font-bold tracking-widest text-electric-blue uppercase mb-1">Bikes & Scooters</span>
              <h3 className="text-xl font-bold text-white mb-1">Ride With Flexible Options</h3>
              <div className="mt-3">
                <Link href="/installments?category=Bikes" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-1.5 px-4 rounded-lg text-xs transition-colors border border-white/20">Enquire Now</Link>
              </div>
            </div>
          </div>

          {/* Small Card 2: Solar */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-gradient-to-b from-orange-900/80 to-navy shadow-lg aspect-video md:aspect-auto">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-1f9509ce158a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase mb-1">Solar Solutions</span>
              <h3 className="text-xl font-bold text-white mb-1">Power Your Home</h3>
              <div className="mt-3">
                <Link href="/installments?category=Solar" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-1.5 px-4 rounded-lg text-xs transition-colors border border-white/20">Discuss Requirements</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
