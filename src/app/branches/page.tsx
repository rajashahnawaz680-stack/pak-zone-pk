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
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">Our Store</h1>
          <p className="text-lg text-gray-600">
            Visit our physical showroom in Islamabad to explore our premium products and receive professional consultation from our team.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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

              <div className="p-8 flex flex-col flex-grow space-y-6">
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed text-lg">{branch.address}</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-semibold text-lg">{branch.phone}</p>
                    <p className="text-gray-500">WhatsApp: {branch.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium text-lg">{branch.hours}</p>
                </div>

                <div className="mt-auto pt-8">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-electric-blue hover:bg-bright-blue text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md"
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
