import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy">Products</h1>
        <button className="bg-electric-blue hover:bg-bright-blue text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center transition-colors">
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search products..." className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-electric-blue outline-none text-sm bg-white" />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg text-sm py-2 pl-3 pr-8 focus:ring-electric-blue outline-none bg-white">
              <option>All Categories</option>
              <option>Mobile Phones</option>
              <option>Laptops</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm bg-white">
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price (Rs.)</th>
                <th className="px-6 py-4 font-medium">Installment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <div>
                      <p className="font-bold text-navy">iPhone 15 Pro Max</p>
                      <p className="text-xs text-gray-500">Apple</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">Mobile Phones</td>
                <td className="px-6 py-4 font-semibold text-navy">450,000</td>
                <td className="px-6 py-4"><span className="text-success-green font-medium">Yes</span></td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">In Stock</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-electric-blue mr-3"><Edit className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <div>
                      <p className="font-bold text-navy">Dawlance Refrigerator 91999</p>
                      <p className="text-xs text-gray-500">Dawlance</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">Refrigerators</td>
                <td className="px-6 py-4 font-semibold text-navy">145,000</td>
                <td className="px-6 py-4"><span className="text-success-green font-medium">Yes</span></td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">In Stock</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-electric-blue mr-3"><Edit className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500 bg-gray-50">
          <span>Showing 1 to 2 of 124 products</span>
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
