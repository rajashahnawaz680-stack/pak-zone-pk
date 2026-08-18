import { MapPin, Phone, Clock } from "lucide-react";

export function StoreLocation() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-electric-blue/10 transform skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-4">
              <span className="bg-electric-blue/20 text-electric-blue text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-electric-blue/30">
                Visit Our Store
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Experience Our Products <br className="hidden md:block" />
              <span className="text-electric-blue">In Person.</span>
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <MapPin className="w-24 h-24 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-electric-blue mr-3" />
                Islamabad Branch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Office No. 23, Emporium Plaza, Lower Ground,<br />
                    Near Pakeeza Cash & Carry, Phase 1<br />
                    Jinnah Garden, Islamabad, Pakistan
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 mr-3 shrink-0"></div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a href="tel:03085966696" className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 mr-2" /> 0308 5966696
                    </a>
                    <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 mr-2 text-success-green" /> 0316 5747971 (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-300 flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> 
                    Open Monday to Saturday (10:00 AM - 10:00 PM)
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Emporium+Plaza+Jinnah+Garden+Islamabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/50 group"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map Image / Visual representation */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 aspect-video lg:aspect-square relative group">
              {/* Map Placeholder Image - using a stylistic map representation */}
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin className="w-8 h-8 text-electric-blue" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
