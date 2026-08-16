"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer electronics on installments?",
      answer: "Eligible products may be available through installment options subject to applicable terms and approval. Please fill out our installment application or contact us for specific product eligibility."
    },
    {
      question: "Can I buy products for cash?",
      answer: "Yes, applicable products can be purchased through available cash purchase options. We offer competitive cash prices for all our items."
    },
    {
      question: "Can I request a product that isn't listed?",
      answer: "Yes. Submit the product request form and our team can review your request. We will try our best to source the product for you."
    },
    {
      question: "Do you provide mobile phones on installments?",
      answer: "Selected mobile phones may be available through installment options, subject to applicable terms and approval. This includes major brands like Apple, Samsung, and Xiaomi."
    },
    {
      question: "Can I get a laptop on installments?",
      answer: "Selected laptops may be available through installment options. We stock various brands suitable for office work, students, and gaming."
    },
    {
      question: "Do you provide bikes and scooters?",
      answer: "Selected bikes and scooters may be available through applicable purchase options. We offer popular models like Honda CD 70 and various EV scooters."
    },
    {
      question: "Do you provide solar systems?",
      answer: "Yes, customers can contact us regarding solar system requirements and available purchase options to help reduce your energy bills."
    },
    {
      question: "How do I apply?",
      answer: "Complete the online application form on our Installments page and our team will contact you to discuss options and guide you through the next steps."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-navy mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products, installment plans, and purchasing process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  openIndex === index ? 'border-electric-blue shadow-md' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-bold text-lg pr-4 ${openIndex === index ? 'text-electric-blue' : 'text-navy'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-electric-blue/10 text-electric-blue' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-navy mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
            <a 
              href="https://wa.me/923165747971"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
