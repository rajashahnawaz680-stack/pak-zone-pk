import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pak Zone Electronics | Mobiles, Laptops & Appliances on Installments in Islamabad",
  description: "Get the electronics you need – pay your way. Shop mobiles, laptops, home appliances, bikes, scooters, solar systems and more with convenient cash purchase and installment options at Pak Zone Electronics in Islamabad.",
  keywords: "Electronics Store Islamabad, Electronics on Installments Islamabad, Mobile Phones on Installments, Home Appliances, Bikes, Solar Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
