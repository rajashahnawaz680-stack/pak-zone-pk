import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Business Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              Pak Zone <span className="text-electric-blue">Electronics</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted retail partner with 15-20 years of experience. We provide a premium selection of electronics, home appliances, and mobility solutions backed by professional customer service.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li><Link href="/category/mobiles" className="text-gray-400 hover:text-electric-blue transition-colors">Mobiles</Link></li>
              <li><Link href="/category/laptops" className="text-gray-400 hover:text-electric-blue transition-colors">Laptops</Link></li>
              <li><Link href="/category/bikes" className="text-gray-400 hover:text-electric-blue transition-colors">Bikes</Link></li>
              <li><Link href="/category/scooters" className="text-gray-400 hover:text-electric-blue transition-colors">Electric Scooters</Link></li>
              <li><Link href="/category/electronics" className="text-gray-400 hover:text-electric-blue transition-colors">Electronics</Link></li>
              <li><Link href="/category/home-appliances" className="text-gray-400 hover:text-electric-blue transition-colors">Home Appliances</Link></li>
              <li><Link href="/category/home-appliances" className="text-gray-400 hover:text-electric-blue transition-colors">LED TVs</Link></li>
              <li><Link href="/category/home-appliances" className="text-gray-400 hover:text-electric-blue transition-colors">Refrigerators</Link></li>
              <li><Link href="/category/home-appliances" className="text-gray-400 hover:text-electric-blue transition-colors">Ovens</Link></li>
              <li><Link href="/category/home-appliances" className="text-gray-400 hover:text-electric-blue transition-colors">Geysers</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">About Us</Link></li>
              <li><Link href="/what-we-offer" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Categories</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-electric-blue transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Visit Our Store</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    Office No. 23, Emporium Plaza, Lower Ground,<br />
                    Near Pakeeza Cash & Carry, Phase 1<br />
                    Jinnah Garden, Islamabad, Pakistan
                  </span>
                </div>
              </li>
              <li>
                <a href="tel:03085966696" className="flex items-center space-x-3 text-gray-400 hover:text-electric-blue transition-colors">
                  <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="text-sm">0308 5966696</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923165747971" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-success-green transition-colors">
                  <Phone className="w-5 h-5 text-success-green shrink-0" />
                  <span className="text-sm">0316 5747971 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@pakzoneelectronics.com" className="flex items-center space-x-3 text-gray-400 hover:text-electric-blue transition-colors">
                  <Mail className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="text-sm">info@pakzoneelectronics.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pak Zone Electronics. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-xs font-semibold tracking-wider uppercase bg-gray-800/50 px-4 py-2 rounded-lg">
              15–20 Years Experience
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
