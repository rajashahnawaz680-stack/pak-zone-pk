import { Layers, ShoppingBag, Store, MessagesSquare, LifeBuoy } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Layers className="w-8 h-8 text-electric-blue" />,
      title: "Wide Selection",
      description: "Explore multiple categories across technology, mobility, and home appliances."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-electric-blue" />,
      title: "Convenient Shopping",
      description: "Find multiple product categories from trusted brands all in one place."
    },
    {
      icon: <Store className="w-8 h-8 text-electric-blue" />,
      title: "Local Store Experience",
      description: "Visit our physical showroom in Islamabad and speak directly with our team."
    },
    {
      icon: <MessagesSquare className="w-8 h-8 text-electric-blue" />,
      title: "Product Guidance",
      description: "Make informed purchasing decisions with professional consultation and assistance."
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-electric-blue" />,
      title: "Customer Support",
      description: "We make it easy for customers to contact our business for post-purchase support."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-electric-blue/10 text-electric-blue text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              Why Choose Pak Zone
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">
            A Better Retail Experience
          </h2>
          <p className="text-gray-600 text-lg">
            We combine the convenience of a broad product range with the trust and reliability of an established local showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group ${
                index === 3 || index === 4 ? "lg:col-span-1.5" : ""
              }`}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
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
