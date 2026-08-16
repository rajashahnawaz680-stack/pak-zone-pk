"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923165747971?text=Hello%20Pak%20Zone%20Electronics%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20products%20and%20installment%20options."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-success-green hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
