import { Search, Eye } from "lucide-react";

export default function AdminApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy">Installment Applications</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by name or phone..." className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-electric-blue outline-none text-sm bg-white" />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg text-sm py-2 pl-3 pr-8 focus:ring-electric-blue outline-none bg-white">
              <option>All Statuses</option>
              <option>New</option>
              <option>Under Review</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm bg-white">
                <th className="px-6 py-4 font-medium">Customer Details</th>
                <th className="px-6 py-4 font-medium">Product Requested</th>
                <th className="px-6 py-4 font-medium">Income/Emp Type</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-bold text-navy">Ali Khan</p>
                  <p className="text-xs text-gray-500">0300 1234567 • Islamabad</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-800">iPhone 15 Pro</p>
                  <p className="text-xs text-gray-500">Mobile Phones • 450,000</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-800">Rs. 150,000</p>
                  <p className="text-xs text-gray-500">Salaried</p>
                </td>
                <td className="px-6 py-4 text-gray-500">Today, 10:45 AM</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">New</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-electric-blue hover:text-bright-blue font-medium flex items-center justify-end w-full">
                    <Eye className="w-4 h-4 mr-1" /> View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-bold text-navy">Sarah Ahmed</p>
                  <p className="text-xs text-gray-500">0333 9876543 • Rawalpindi</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-800">Haier 1.5 Ton AC</p>
                  <p className="text-xs text-gray-500">AC & Coolers • 185,000</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-800">Rs. 85,000</p>
                  <p className="text-xs text-gray-500">Salaried</p>
                </td>
                <td className="px-6 py-4 text-gray-500">Yesterday</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Under Review</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-electric-blue hover:text-bright-blue font-medium flex items-center justify-end w-full">
                    <Eye className="w-4 h-4 mr-1" /> View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500 bg-gray-50">
          <span>Showing 1 to 2 of 45 applications</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded bg-white disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border rounded bg-electric-blue text-white">1</button>
            <button className="px-3 py-1 border rounded bg-white">2</button>
            <button className="px-3 py-1 border rounded bg-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
