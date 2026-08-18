import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <div className="inline-block mb-4">
              <span className="bg-electric-blue/20 text-electric-blue text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-electric-blue/30">
                Built on Experience
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              15–20 Years of <br className="hidden md:block" />
              <span className="text-electric-blue">Retail Excellence.</span>
            </h2>
            
            <div className="space-y-8">
              
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  Who We Are
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Pak Zone Electronics is an established local retail showroom operating in Islamabad. With nearly two decades of experience, we have built our reputation on trust, quality, and exceptional customer service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  What We Offer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We provide a comprehensive selection of premium categories under one roof:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Mobile Phones", "Laptops & Computers", 
                    "Bikes & Scooters", "LED TVs", 
                    "Refrigerators", "Home Appliances"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-electric-blue mr-2 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  Our Approach
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus on customer convenience and product variety. Whether you are looking for the latest smartphone or upgrading your home appliances, our professional team is here to guide your purchase decision.
                </p>
              </div>

            </div>

            <div className="mt-10">
              <Link href="/about" className="inline-flex items-center justify-center border-2 border-white/20 hover:border-electric-blue hover:bg-electric-blue/10 text-white font-bold py-4 px-8 rounded-xl transition-all group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
                <div className="bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-700">
                  <div className="text-4xl font-black text-white mb-1">15+</div>
                  <div className="text-gray-400 text-sm font-medium">Years Experience</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-electric-blue rounded-3xl p-6 shadow-xl text-white">
                  <div className="text-4xl font-black mb-1">3</div>
                  <div className="text-blue-100 text-sm font-medium">Branch Locations</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
