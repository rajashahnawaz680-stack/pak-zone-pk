import Link from "next/link";
import { Smartphone, Banknote, HelpCircle, Zap } from "lucide-react";

export function QuickServiceCards() {
  const cards = [
    {
      title: "Electronics on Installments",
      description: "Get eligible mobiles, laptops, appliances and other products through available installment options.",
      icon: Smartphone,
      buttonText: "Explore Installments",
      link: "/installments",
      color: "bg-blue-50 text-electric-blue",
    },
    {
      title: "Cash Purchase",
      description: "Purchase your desired products through available cash purchase options.",
      icon: Banknote,
      buttonText: "Shop Now",
      link: "/shop",
      color: "bg-green-50 text-success-green",
    },
    {
      title: "Purchase Assistance",
      description: "Found the product you want from another seller or store? Contact us to discuss available payment assistance, subject to applicable terms and approval.",
      icon: HelpCircle,
      buttonText: "Request Assistance",
      link: "/purchase-assistance",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Bikes, Scooters & Solar",
      description: "Explore bikes, scooters and solar solutions through available cash or installment options.",
      icon: Zap,
      buttonText: "Learn More",
      link: "/categories",
      color: "bg-orange-50 text-orange-500",
    }
  ];

  return (
    <section className="py-12 -mt-16 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg shadow-gray-200/50 p-6 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{card.description}</p>
                <Link 
                  href={card.link}
                  className="inline-block font-semibold text-electric-blue hover:text-bright-blue transition-colors mt-auto"
                >
                  {card.buttonText} &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
