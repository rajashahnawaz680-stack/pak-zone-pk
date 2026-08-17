export function InstallmentSteps() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You Need",
      description: "Choose a category or contact our team directly with your specific requirement."
    },
    {
      number: "02",
      title: "Get Current Options",
      description: "Our team shares available products, current prices, and relevant details."
    },
    {
      number: "03",
      title: "Choose Cash or Installment",
      description: "Discuss the available purchasing options that best suit your budget."
    },
    {
      number: "04",
      title: "Complete Your Purchase",
      description: "Finalize the applicable process with our team securely and easily."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            A simple, transparent process to get exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-gray-100 absolute top-4 right-6 group-hover:text-electric-blue/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 pt-8">
                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
