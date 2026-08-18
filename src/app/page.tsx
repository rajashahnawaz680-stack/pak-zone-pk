import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ShowroomExperience } from "@/components/home/ShowroomExperience";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutSection } from "@/components/home/AboutSection";
import { StoreLocation } from "@/components/home/StoreLocation";
import Link from "next/link";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Creative */}
      <Hero />

      {/* 2. Quick Highlights Bar */}
      <TrustBar />

      {/* 3. Main Category Grid (9 Categories) */}
      <CategoryGrid />

      {/* 4. Professional Showroom Workspace Section */}
      <ShowroomExperience />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. About the Business */}
      <AboutSection />

      {/* 7. Missing Products / Assistance CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us what you need. Even if the product isn't displayed on our website, contact our team and we'll discuss the available options with you in our showroom.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-navy hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Single Approved Store Location */}
      <StoreLocation />

      {/* 9. Final Contact CTA */}
      <section className="py-24 bg-electric-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Have a Question? Let's Talk.</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Our team is ready to provide professional assistance for all your electronics and mobility needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="bg-success-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </a>
            <a href="tel:03085966696" className="bg-navy hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center">
              <PhoneCall className="w-5 h-5 mr-2" /> Call Now
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-navy font-bold py-4 px-8 rounded-xl shadow-lg transition-colors">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
