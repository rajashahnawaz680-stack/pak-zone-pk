import Link from "next/link";
import { Search, FileEdit, CheckCircle, ShoppingBag } from "lucide-react";

export function InstallmentSteps() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Product",
      description: "Select a mobile, laptop, appliance, bike, scooter, solar system or another eligible product.",
      icon: Search,
    },
    {
      number: "02",
      title: "Submit Your Request",
      description: "Complete the simple online installment application with your basic details.",
      icon: FileEdit,
    },
    {
      number: "03",
      title: "Application Review",
      description: "Our team reviews your request and contacts you regarding the available options.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Complete Your Purchase",
      description: "After approval and agreement on applicable terms, complete the process and receive your product.",
      icon: ShoppingBag,
    },
  ];

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want It Today? <span className="text-electric-blue">Explore Available Installment Options.</span></h2>
          <p className="text-gray-300 text-lg">
            Choose the product you need, submit your details and our team will contact you to discuss the available installment options and applicable terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-800" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-900 rounded-full border-4 border-navy shadow-xl flex items-center justify-center mb-6 relative z-10 group hover:border-electric-blue transition-colors">
                  <Icon className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/installments" className="inline-block bg-electric-blue hover:bg-bright-blue text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg shadow-electric-blue/20 transition-all hover:-translate-y-1">
            Apply for Installment Now
          </Link>
        </div>
      </div>
    </section>
  );
}
