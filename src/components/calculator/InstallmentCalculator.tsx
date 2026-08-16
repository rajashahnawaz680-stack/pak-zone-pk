"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export function InstallmentCalculator() {
  const [price, setPrice] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [duration, setDuration] = useState<number>(6); // 6, 12, 18, 24 months

  // Simple mock formula for calculation (actual logic should come from backend/admin config)
  // Let's assume a mock markup of 2% per month on the remaining amount for estimation purposes.
  const calculateEstimatedPayment = () => {
    if (price <= 0 || downPayment < 0 || downPayment >= price) return 0;
    const remainingAmount = price - downPayment;
    const monthlyMarkup = 0.02; // 2%
    const totalMarkup = remainingAmount * monthlyMarkup * duration;
    const totalToPay = remainingAmount + totalMarkup;
    return Math.round(totalToPay / duration);
  };

  const estimatedMonthly = calculateEstimatedPayment();
  const remainingAmount = price - downPayment;

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-100">
        <div className="bg-electric-blue/10 p-3 rounded-lg">
          <Calculator className="w-6 h-6 text-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy">Installment Calculator</h3>
          <p className="text-sm text-gray-500">Estimate your monthly payments</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Product Price (Rs.)</label>
          <input 
            type="number" 
            value={price || ''}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="e.g. 150000"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment (Rs.)</label>
          <input 
            type="number" 
            value={downPayment || ''}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            placeholder="e.g. 30000"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (Months)</label>
          <div className="grid grid-cols-4 gap-3">
            {[3, 6, 12, 18].map((months) => (
              <button
                key={months}
                onClick={() => setDuration(months)}
                className={`py-2 rounded-lg text-sm font-semibold border transition-colors ${
                  duration === months 
                    ? 'bg-electric-blue border-electric-blue text-white' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {months}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-medium">Remaining Amount</span>
          <span className="text-navy font-bold text-lg">Rs. {remainingAmount > 0 ? remainingAmount.toLocaleString() : 0}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-gray-900 font-bold">Estimated Monthly</span>
          <span className="text-electric-blue font-extrabold text-2xl">Rs. {estimatedMonthly > 0 ? estimatedMonthly.toLocaleString() : 0}</span>
        </div>
      </div>

      <div className="mt-4 flex items-start space-x-2 bg-yellow-50 p-4 rounded-lg">
        <div className="text-yellow-600 font-bold text-lg mt-0.5">!</div>
        <p className="text-xs text-yellow-800 leading-relaxed">
          <span className="font-semibold block mb-1">Estimated Payment</span>
          Final terms are subject to approval and applicable processing charges. This calculator is for estimation purposes only.
        </p>
      </div>
    </div>
  );
}
