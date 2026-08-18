import Link from "next/link";
import { Store, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image - Premium Showroom Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 z-10"></div>
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555529733-0e670560f4e1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        ></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-white text-sm font-bold tracking-widest uppercase">
              15–20 Years of Experience
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Everything You Need. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">All in One Place.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Explore mobiles, laptops, bikes, electric scooters, electronics and modern home appliances from a trusted local retailer.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link 
              href="#categories" 
              className="w-full sm:w-auto bg-electric-blue hover:bg-bright-blue text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center group"
            >
              Explore Categories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center"
            >
              <Store className="w-5 h-5 mr-2" />
              Visit Our Store
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
