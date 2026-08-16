import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function BranchesPage() {
  const branches = [
    {
      id: 1,
      name: "Main Branch - Jinnah Garden",
      address: "Office No. 23, Emporium Plaza, Lower Ground, Near Pakeeza Cash & Carry, Phase 1 Jinnah Garden, Islamabad, Pakistan",
      phone: "0308 5966696",
      whatsapp: "0316 5747971",
      hours: "Mon - Sat: 10:00 AM - 10:00 PM",
      isMain: true
    },
    {
      id: 2,
      name: "Branch 2",
      address: "Address will be updated soon.",
      phone: "0308 5966696",
      whatsapp: "0316 5747971",
      hours: "Mon - Sat: 10:00 AM - 10:00 PM",
      isMain: false
    },
    {
      id: 3,
      name: "Branch 3",
      address: "Address will be updated soon.",
      phone: "0308 5966696",
      whatsapp: "0316 5747971",
      hours: "Mon - Sat: 10:00 AM - 10:00 PM",
      isMain: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">Our Branches</h1>
          <p className="text-lg text-gray-600">
            Visit any of our 3 locations across the city to explore our products and discuss installment options with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className={`bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col ${branch.isMain ? 'border-electric-blue shadow-electric-blue/10 ring-1 ring-electric-blue' : 'border-gray-200'}`}>
              
              <div className={`p-6 ${branch.isMain ? 'bg-navy text-white' : 'bg-gray-50 border-b border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold">{branch.name}</h2>
                  {branch.isMain && (
                    <span className="bg-electric-blue text-white text-xs font-bold px-2 py-1 rounded">Head Office</span>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-6">
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{branch.address}</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-semibold">{branch.phone}</p>
                    <p className="text-gray-500 text-sm">WhatsApp: {branch.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{branch.hours}</p>
                </div>

                <div className="mt-auto pt-6">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-navy font-bold py-3 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Navigation className="w-5 h-5 mr-2" /> Get Directions
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Business SEO Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Pak Zone Electronics — Islamabad</h2>
          <p className="text-gray-600 mb-6">
            Serving the Islamabad region with premium electronics, appliances, mobiles, bikes, and solar solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-2 text-navy font-semibold bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Phone className="w-5 h-5 text-electric-blue" />
              <span>0308 5966696</span>
            </div>
            <div className="flex items-center space-x-2 text-navy font-semibold bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Phone className="w-5 h-5 text-success-green" />
              <span>0316 5747971</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
