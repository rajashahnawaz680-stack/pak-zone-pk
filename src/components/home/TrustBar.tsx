import { ShieldCheck, MapPin, Grid, Handshake } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-electric-blue" />,
      title: "15–20 Years",
      subtitle: "Experience"
    },
    {
      icon: <MapPin className="w-8 h-8 text-electric-blue" />,
      title: "3 Branches",
      subtitle: "Multiple Locations"
    },
    {
      icon: <Grid className="w-8 h-8 text-electric-blue" />,
      title: "Wide Range",
      subtitle: "Electronics & More"
    },
    {
      icon: <Handshake className="w-8 h-8 text-electric-blue" />,
      title: "Cash + Installments",
      subtitle: "Available Options"
    }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start md:px-8 space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
