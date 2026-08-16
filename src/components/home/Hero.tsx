import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden py-20 lg:py-32">
      {/* Background styling for premium feel */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric-blue blur-[100px]" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-bright-blue blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Get the Electronics You Need — <span className="text-electric-blue">Pay Your Way</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Shop mobiles, laptops, home appliances, bikes, scooters, solar systems and more with convenient cash purchase and installment options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/installments" 
                className="bg-electric-blue hover:bg-bright-blue text-white px-8 py-4 rounded-md font-semibold text-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-electric-blue/30"
              >
                <span>Apply for Installment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/shop" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
              >
                <span>Explore Products</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-y-3 gap-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-success-green" />
                <span>15+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-success-green" />
                <span>3 Branches</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-success-green" />
                <span>Cash & Installment Options</span>
              </div>
            </div>
          </div>

          {/* Abstract/Premium Imagery Composition */}
          <div className="relative hidden lg:block h-[500px]">
            {/* We'll use styled placeholders since no specific image assets are provided, 
                but using a composition of subtle layered cards representing the electronics */}
            <div className="absolute top-10 right-10 w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10 transform rotate-6 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden">
               <div className="text-center p-4">
                 <div className="w-16 h-24 border-2 border-electric-blue/50 rounded-lg mx-auto mb-3" />
                 <p className="text-sm font-semibold text-white">Smartphones</p>
               </div>
            </div>
            <div className="absolute bottom-10 left-10 w-72 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10 transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden z-10 backdrop-blur-md bg-opacity-90">
               <div className="text-center p-4">
                 <div className="w-24 h-16 border-2 border-electric-blue/50 rounded-lg mx-auto mb-3" />
                 <p className="text-sm font-semibold text-white">Laptops & Computers</p>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-electric-blue/20 to-bright-blue/20 rounded-full blur-2xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
