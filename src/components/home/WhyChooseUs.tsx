import { ShieldCheck, MonitorSmartphone, CreditCard, HeadphonesIcon, MapPin, Handshake } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-electric-blue" />,
      title: "Experience",
      description: "15–20 years of trusted business experience in electronics."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-electric-blue" />,
      title: "Wide Product Range",
      description: "From smartphones to appliances, bikes, and solar systems."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-electric-blue" />,
      title: "Cash Options",
      description: "Customers can enquire and purchase directly on cash."
    },
    {
      icon: <Handshake className="w-8 h-8 text-electric-blue" />,
      title: "Installment Options",
      description: "Available installment options depending on product and applicable terms."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-electric-blue" />,
      title: "Direct Support",
      description: "Speak directly with our knowledgeable team for assistance."
    },
    {
      icon: <MapPin className="w-8 h-8 text-electric-blue" />,
      title: "Multiple Branches",
      description: "3 branches with centralized contact support across Islamabad."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-electric-blue/10 text-electric-blue text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              Why Pak Zone Electronics
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">
            Experience That Customers Can Rely On
          </h2>
          <p className="text-gray-600 text-lg">
            With approximately 15–20 years of experience, Pak Zone Electronics has built its business around quality electronics, exceptional customer service, and convenient purchasing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
