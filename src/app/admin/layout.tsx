import Link from "next/link";
import { LayoutDashboard, Package, FileText, HelpCircle, Phone, MapPin, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold tracking-tight">Pak Zone <span className="text-electric-blue">Admin</span></h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 bg-electric-blue text-white rounded-lg font-medium">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/products" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors">
            <Package className="w-5 h-5" />
            <span>Creatives</span>
          </Link>
          <Link href="/admin/applications" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors">
            <FileText className="w-5 h-5" />
            <span>Leads</span>
          </Link>
          <Link href="/admin/requests" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span>Requests</span>
          </Link>
          <Link href="/admin/leads" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors">
            <Phone className="w-5 h-5" />
            <span>Contact Leads</span>
          </Link>
          <Link href="/admin/branches" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors">
            <MapPin className="w-5 h-5" />
            <span>Branches</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-2">
          <Link href="/admin/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition-colors text-sm">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 transition-colors text-sm">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
