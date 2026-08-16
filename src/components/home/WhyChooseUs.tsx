import { Shield, Smartphone, CreditCard, MapPin, Headphones, HelpCircle } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "15+ Years of Experience",
      description: "Serving customers with extensive experience in electronics and installment-based purchasing.",
    },
    {
      icon: Smartphone,
      title: "Wide Product Range",
      description: "Mobiles, laptops, appliances, bikes, scooters, solar systems and more.",
    },
    {
      icon: CreditCard,
      title: "Cash & Installment Options",
      description: "Choose the purchasing option that suits your needs and budget.",
    },
    {
      icon: MapPin,
      title: "3 Branches",
      description: "Convenient access through multiple business locations across the city.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Get assistance before and after your purchase from our dedicated team.",
    },
    {
      icon: HelpCircle,
      title: "Flexible Product Requests",
      description: "Ask us about products that are not currently listed online.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Pak Zone Electronics?</h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-blue-50 text-electric-blue rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
