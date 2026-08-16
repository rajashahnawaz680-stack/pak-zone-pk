import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Pak Zone <span className="text-electric-blue">Electronics</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Electronics • Mobiles • Appliances • Bikes • Scooters • Solar
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Providing premium products and flexible installment options to customers for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Home</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Shop</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Categories</Link></li>
              <li><Link href="/installments" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Installments</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">How It Works</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">About Us</Link></li>
              <li><Link href="/branches" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Branches</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Customer Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:03085966696" className="flex items-center space-x-3 text-gray-400 hover:text-electric-blue transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-electric-blue/20 transition-colors">
                    <Phone className="w-4 h-4 text-electric-blue" />
                  </div>
                  <span className="text-sm">0308 5966696</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-success-green transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-success-green/20 transition-colors">
                    <Phone className="w-4 h-4 text-success-green" />
                  </div>
                  <span className="text-sm">0316 5747971 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <div className="bg-gray-800 p-2 rounded-full mt-1">
                    <MapPin className="w-4 h-4 text-electric-blue" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    Office No. 23, Emporium Plaza, Lower Ground,<br />
                    Near Pakeeza Cash & Carry, Phase 1<br />
                    Jinnah Garden, Islamabad, Pakistan
                  </span>
                </div>
              </li>
              <li>
                <Link href="/product-request" className="text-electric-blue hover:text-bright-blue transition-colors text-sm font-medium">Request a Product &rarr;</Link>
              </li>
              <li>
                <Link href="/installments" className="text-electric-blue hover:text-bright-blue transition-colors text-sm font-medium">Apply for Installment &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/installment-terms" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Installment Terms</Link></li>
              <li><Link href="/return-policy" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Return / Exchange Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pak Zone Electronics. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm font-medium bg-gray-800 px-3 py-1 rounded-full">15+ Years Experience</span>
            <span className="text-gray-500 text-sm font-medium bg-gray-800 px-3 py-1 rounded-full">3 Branches</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
