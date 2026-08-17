"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20products%20and%20installment%20options."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 bg-success-green hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Hover Message */}
      <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 w-max px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-sm font-semibold text-navy">Ask for Details & Prices</p>
        <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-gray-100"></div>
      </div>
    </a>
  );
}
