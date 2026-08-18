import { Grid, ShieldCheck, MapPin, HeadphonesIcon, ThumbsUp } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: <Grid className="w-6 h-6 text-electric-blue" />,
      title: "Wide Product Range",
      subtitle: "Electronics & Mobility"
    },
    {
      icon: <MapPin className="w-6 h-6 text-electric-blue" />,
      title: "Trusted Local Store",
      subtitle: "Visit Our Showroom"
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-electric-blue" />,
      title: "Quality Products",
      subtitle: "Premium Selection"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-electric-blue" />,
      title: "Professional Support",
      subtitle: "Expert Guidance"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-electric-blue" />,
      title: "Convenient Shopping",
      subtitle: "Easy Store Experience"
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm relative z-30 -mt-6 mx-4 rounded-xl md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="mb-3 bg-blue-50 p-3 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-navy font-bold text-sm md:text-base">{item.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
