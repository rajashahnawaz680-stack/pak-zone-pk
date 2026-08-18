import Link from "next/link";
import { MapPin, Users, CheckCircle2 } from "lucide-react";

export function ShowroomExperience() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute inset-0 bg-electric-blue/10 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              ></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-xl max-w-[200px] z-20">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-8 h-8 text-electric-blue" />
                <span className="text-2xl font-black">15+</span>
              </div>
              <p className="text-sm text-gray-300 font-medium leading-snug">Years of retail excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="bg-blue-50 text-electric-blue text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Professional Showroom
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
              A Store Built Around <span className="text-electric-blue">Your Needs</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience a premium retail environment where you can explore a broad range of technology, mobility, and home products. Our expert team is ready to provide professional consultation to help you make informed purchasing decisions.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Professional electronics & appliance displays",
                "Hands-on experience with modern mobility solutions",
                "Dedicated customer consultation workspace",
                "Trusted local retail presence in Islamabad"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success-green mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-navy hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" /> Visit Our Store
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
