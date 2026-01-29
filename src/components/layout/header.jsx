import React from "react";  
import { Search, Moon } from "lucide-react";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="w-full bg-[#121417] py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-y-4">
        
        {/* LOGO */}
        <div className="flex items-center tracking-tighter uppercase shrink-0">
          <span className="text-orange-600 text-2xl md:text-5xl font-black italic">Daily</span>
          <span className="text-white text-xl md:text-2xl font-bold ml-1">News</span>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex items-center flex-grow sm:flex-initial">
            <div className="flex bg-[#1a1d21] items-center px-4 py-1 -skew-x-12 border border-gray-800 w-full">
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none outline-none text-gray-300 text-sm py-1 skew-x-12 w-full md:w-64 focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="text-white hover:text-orange-400 p-1 ml-2 skew-x-12">
                <Search size={18} />
              </button>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
