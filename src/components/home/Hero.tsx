import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-electric-blue rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-bright-blue rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-8">
          <div className="inline-block">
            <span className="bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs md:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              15–20 YEARS OF EXPERIENCE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Electronics.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-bright-blue">
              Your Choice.
            </span><br />
            Your Way to Pay.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Explore mobiles, laptops, home appliances, bikes, scooters, solar solutions and more. Contact Pak Zone Electronics for current prices, availability and available installment options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/what-we-offer"
              className="bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 text-center"
            >
              Explore What We Offer
            </Link>
            <Link 
              href="/installments"
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all text-center flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Apply for Installment
            </Link>
          </div>
          
          <div className="pt-2">
            <a 
              href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20would%20like%20to%20know%20more%20about%20your%20available%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-success-green hover:text-green-400 font-semibold transition-colors group"
            >
              <div className="bg-success-green/20 p-2 rounded-full mr-3 group-hover:bg-success-green/30 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              WhatsApp Us: 0316 5747971
            </a>
          </div>
        </div>

        {/* Visual Creative (Abstract Placeholder representing multiple categories) */}
        <div className="lg:w-1/2 w-full max-w-2xl">
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-navy flex items-center justify-center p-8 group">
            {/* We'll use styled placeholders since no specific image assets are provided, 
                but structure it so it looks like a premium composite image */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
              <div className="bg-gradient-to-br from-electric-blue/20 to-transparent rounded-2xl border border-white/5 p-6 flex flex-col justify-end transform transition-transform duration-500 hover:scale-105">
                <div className="w-16 h-24 bg-gray-800 rounded-lg border border-gray-700 shadow-inner mb-4 ml-auto"></div>
                <h3 className="text-white font-bold text-lg">Smartphones</h3>
              </div>
              
              <div className="bg-gradient-to-bl from-purple-500/20 to-transparent rounded-2xl border border-white/5 p-6 flex flex-col justify-end transform transition-transform duration-500 hover:scale-105">
                <div className="w-24 h-16 bg-gray-800 rounded-md border border-gray-700 shadow-inner mb-4"></div>
                <h3 className="text-white font-bold text-lg">Laptops</h3>
              </div>
              
              <div className="bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl border border-white/5 p-6 flex flex-col justify-end transform transition-transform duration-500 hover:scale-105">
                <div className="w-20 h-28 bg-gray-800 rounded-xl border border-gray-700 shadow-inner mb-4 mx-auto"></div>
                <h3 className="text-white font-bold text-lg">Appliances</h3>
              </div>
              
              <div className="bg-gradient-to-tl from-success-green/20 to-transparent rounded-2xl border border-white/5 p-6 flex flex-col justify-end transform transition-transform duration-500 hover:scale-105">
                <div className="w-24 h-24 bg-gray-800 rounded-full border border-gray-700 shadow-inner mb-4"></div>
                <h3 className="text-white font-bold text-lg">Solar & Bikes</h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
