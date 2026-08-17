import Link from "next/link";
import { MessageCircle, Info } from "lucide-react";

export function VisualShowcaseSections() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Home Appliances Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="md:w-1/2 rounded-3xl overflow-hidden relative min-h-[400px] shadow-xl group">
              <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-electric-blue font-bold tracking-widest text-xs uppercase mb-2 block">Home Comfort</span>
                <h3 className="text-3xl font-bold text-white mb-2">Refrigerators & ACs</h3>
                <p className="text-gray-300 text-sm">Explore cooling solutions from leading brands.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 flex flex-col justify-center bg-gray-50 rounded-3xl p-10 lg:p-16 border border-gray-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Upgrade Your Home Appliances</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you need a new refrigerator, air conditioner, or washing machine, we provide access to top brands with flexible purchasing options designed to fit your needs.
              </p>
              <div className="space-y-4">
                <Link href="/installments?category=Home%20Appliances" className="block w-full text-center bg-navy hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                  Ask About Availability
                </Link>
                <a href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20looking%20for%20Home%20Appliances.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-navy font-bold py-4 px-6 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2 text-success-green" /> WhatsApp Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bikes & Solar Showcase */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-stretch">
            
            <div className="md:w-1/2 grid grid-rows-2 gap-4">
              <div className="rounded-3xl overflow-hidden relative min-h-[250px] shadow-xl group">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Bikes & Scooters</h3>
                  <a href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20want%20to%20know%20about%20bikes%20on%20installments." target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-electric-blue hover:text-white transition-colors">
                    Ask for Details &rarr;
                  </a>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden relative min-h-[250px] shadow-xl group">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-1f9509ce158a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Solar Solutions</h3>
                  <a href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20need%20details%20on%20Solar%20Systems." target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-white transition-colors">
                    Discuss Your Requirement &rarr;
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex flex-col justify-center p-6 lg:p-10">
              <span className="text-electric-blue font-bold tracking-widest text-sm uppercase mb-4 block">Mobility & Energy</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Empowering Your Daily Life
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Looking for a reliable ride or a way to power your home efficiently? Contact us to discuss available bikes, EV scooters, and solar installations.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-electric-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Why No Fixed Prices?</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Product availability, pricing and installment options can vary based on market conditions. Contact our team for the latest available options and personalized information.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="inline-block bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
