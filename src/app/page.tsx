import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { MobilePhonesFeature } from "@/components/home/MobilePhonesFeature";
import { VisualShowcaseSections } from "@/components/home/VisualShowcaseSections";
import { InstallmentPromotion } from "@/components/home/InstallmentPromotion";
import { InstallmentSteps } from "@/components/home/InstallmentSteps";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import Link from "next/link";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Creative */}
      <Hero />

      {/* 2. 15-20 Years Trust Bar */}
      <TrustBar />

      {/* 3. Explore What We Offer (Visual Category Showcase) */}
      <CategoryGrid />

      {/* 4. Mobile Phones Highlight */}
      <MobilePhonesFeature />

      {/* 5 & 6. Home Appliances / Bikes / Solar Showcase */}
      <VisualShowcaseSections />

      {/* 7. Installment CTA */}
      <InstallmentPromotion />

      {/* 8. How It Works */}
      <InstallmentSteps />

      {/* 9. Product Request & Missing Products */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us what you need. Even if the product isn't displayed on our website, contact our team and we'll discuss the available options with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/product-request" className="bg-navy hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md">
              Request a Product
            </Link>
            <Link href="/purchase-assistance" className="bg-white border-2 border-electric-blue text-electric-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-colors">
              Request Purchase Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Why Choose Us (15-20 Years Experience Story) */}
      <WhyChooseUs />

      {/* 11. Branch / Location */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Visit Our Branch</h2>
            <p className="text-gray-400 text-lg">Experience our service in person at our Islamabad location.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl md:w-1/3 flex flex-col items-center justify-center border border-gray-700">
              <MapPin className="w-12 h-12 text-electric-blue mb-4" />
              <h3 className="font-bold text-xl text-center">Islamabad Branch</h3>
            </div>
            <div className="md:w-2/3 text-center md:text-left space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Office No. 23, Emporium Plaza, Lower Ground, Near Pakeeza Cash & Carry, Phase 1 Jinnah Garden, Islamabad, Pakistan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:03085966696" className="flex items-center justify-center sm:justify-start text-electric-blue hover:text-white font-semibold transition-colors">
                  <PhoneCall className="w-5 h-5 mr-2" /> 0308 5966696
                </a>
                <a href="tel:03165747971" className="flex items-center justify-center sm:justify-start text-electric-blue hover:text-white font-semibold transition-colors">
                  <PhoneCall className="w-5 h-5 mr-2" /> 0316 5747971
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final Contact CTA */}
      <section className="py-24 bg-electric-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Looking for Something Specific?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Tell us what you're looking for and our team will help you with current availability, pricing and available purchasing options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="bg-success-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </a>
            <a href="tel:03085966696" className="bg-navy hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center">
              <PhoneCall className="w-5 h-5 mr-2" /> Call Now
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-navy font-bold py-4 px-8 rounded-xl shadow-lg transition-colors">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
