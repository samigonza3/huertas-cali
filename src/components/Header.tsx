import React from 'react';
import { Flower2, Menu, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Flower2 className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">GardenConnect</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search seeds, produce, or gardens..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Seed Exchange</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Produce Share</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Learn</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Community</a>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}