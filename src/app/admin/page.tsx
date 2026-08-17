import { Package, FileText, HelpCircle, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Leads</p>
              <h3 className="text-3xl font-bold text-navy mt-1">1,248</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-electric-blue" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-success-green font-medium flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> 12%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">New Enquiries</p>
              <h3 className="text-3xl font-bold text-navy mt-1">45</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <HelpCircle className="w-6 h-6 text-success-green" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-success-green font-medium flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> 8%</span>
            <span className="text-gray-400 ml-2">from last week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Creatives</p>
              <h3 className="text-3xl font-bold text-navy mt-1">18</h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Pending Review</p>
              <h3 className="text-3xl font-bold text-navy mt-1">12</h3>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <FileText className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-navy mb-4">Recent Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 font-medium text-navy">Ali Khan</td>
                <td className="py-4 text-gray-600">iPhone 15 Pro</td>
                <td className="py-4 text-gray-600">Installment</td>
                <td className="py-4 text-gray-500">Today, 10:45 AM</td>
                <td className="py-4"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">New</span></td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 font-medium text-navy">Sarah Ahmed</td>
                <td className="py-4 text-gray-600">Haier 1.5 Ton AC</td>
                <td className="py-4 text-gray-600">Installment</td>
                <td className="py-4 text-gray-500">Yesterday</td>
                <td className="py-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Under Review</span></td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 font-medium text-navy">Usman Tariq</td>
                <td className="py-4 text-gray-600">Honda CD 70</td>
                <td className="py-4 text-gray-600">Purchase Assist</td>
                <td className="py-4 text-gray-500">Aug 14, 2026</td>
                <td className="py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
