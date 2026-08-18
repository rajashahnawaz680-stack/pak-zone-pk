import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import React from "react";

interface CategoryLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  whyChooseContent: string[];
}

export function CategoryLayout({
  title,
  subtitle,
  heroImage,
  features,
  whyChooseContent
}: CategoryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Category Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg group"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sub-categories / Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">Explore Our Range</h2>
            <p className="text-gray-600 text-lg">
              Visit our showroom to experience our complete {title.toLowerCase()} collection. Our experts are ready to help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${feature.image}')` }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link href="/contact" className="text-electric-blue font-bold flex items-center hover:text-navy transition-colors">
                    Ask for Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for this category */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-navy mb-6">
                Why Buy {title} from Us?
              </h2>
              <div className="space-y-6">
                {whyChooseContent.map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mr-4">
                      <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-lg pt-1 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-navy rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
               <h3 className="text-3xl font-bold mb-6 relative z-10">Ready to Upgrade?</h3>
               <p className="text-gray-300 text-lg mb-8 relative z-10">
                 Visit our Islamabad showroom today or contact our team for current options and pricing.
               </p>
               <div className="space-y-4 relative z-10">
                 <Link href="/contact" className="flex items-center justify-center bg-white text-navy font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors">
                   <MapPin className="w-5 h-5 mr-2" /> Get Store Directions
                 </Link>
                 <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-2 border-white/20 hover:border-success-green hover:bg-success-green/10 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                   Chat on WhatsApp
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
