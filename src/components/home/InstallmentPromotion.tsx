import Link from "next/link";
import { FileText, MessageCircle } from "lucide-react";

export function InstallmentPromotion() {
  return (
    <section className="py-24 bg-electric-blue relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100 50,0" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Want It Now? <br className="md:hidden" />
            <span className="text-navy">Ask About Installments.</span>
          </h2>
          
          <p className="text-xl text-blue-50 mb-12 leading-relaxed">
            Whether you&apos;re looking for a smartphone, laptop, appliance, bike, scooter or solar solution, contact our team to discuss available installment options and applicable terms.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/installments"
              className="w-full sm:w-auto bg-navy hover:bg-gray-900 text-white font-bold py-5 px-10 rounded-xl shadow-xl transition-transform transform hover:-translate-y-1 flex items-center justify-center text-lg"
            >
              <FileText className="w-6 h-6 mr-3" />
              Apply for Installment
            </Link>
            
            <a 
              href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20your%20installment%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy font-bold py-5 px-10 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3 text-success-green" />
              WhatsApp Our Team
            </a>
          </div>
          
          <p className="text-sm text-blue-200 mt-8 font-medium">
            * Options subject to approval and applicable terms. No guaranteed approvals.
          </p>
        </div>
      </div>
    </section>
  );
}
