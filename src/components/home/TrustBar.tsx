import { ShieldCheck, MapPin, CheckSquare, Banknote, HeadphonesIcon } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, text: "15+ Years Experience" },
    { icon: MapPin, text: "3 Branches" },
    { icon: CheckSquare, text: "Wide Product Range" },
    { icon: Banknote, text: "Cash & Installment Options" },
    { icon: HeadphonesIcon, text: "Customer Support" },
  ];

  return (
    <div className="bg-electric-blue text-white py-4 border-y border-bright-blue overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-semibold">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-2">
                <Icon className="w-5 h-5 opacity-80" />
                <span>{item.text}</span>
                {index < items.length - 1 && (
                  <span className="hidden md:inline-block text-white/30 ml-4">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
