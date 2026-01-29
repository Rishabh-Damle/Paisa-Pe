import { FaUser } from "react-icons/fa";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export function AppBar() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/dashboard" className="flex items-center space-x-2 group cursor-pointer">
             <div className="bg-black p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Wallet className="w-5 h-5 text-white" />
             </div>
             <span className="text-xl font-bold tracking-tight">Paisa-Pe</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm hidden sm:block">Hello, User</span>
            <button className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200">
                <FaUser className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
