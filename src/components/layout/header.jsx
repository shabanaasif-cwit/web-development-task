import React from "react";  
import { Search, Moon, ChevronDown } from "lucide-react";

function Header({ searchQuery, setSearchQuery }) {
  // Navigation categories
  const navItems = [
    "Home", "Post Layouts", "Contact", "Fashion", "Popular", 
    "Design", "International", "Trending", "Food", "Technology", "Art", "Medicare"
  ];

  return (
    <header className="w-full bg-[#121417] shadow-md border-b border-gray-800">
      {/* TOP SECTION: Logo and Search */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-y-4">
        
        {/* LOGO */}
        <div className="flex items-center tracking-tighter uppercase shrink-0">
          <span className="text-orange-600 text-2xl md:text-5xl font-black italic cursor-pointer">Daily</span>
          <span className="text-white text-xl md:text-2xl font-bold ml-1">News</span>
        </div>

        {/* SEARCH & UTILITIES */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex items-center flex-grow sm:flex-initial">
            <div className="flex bg-[#1a1d21] items-center px-4 py-1 -skew-x-12 border border-gray-800 w-full">
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none outline-none text-gray-300 text-sm py-1 skew-x-12 w-full md:w-64 focus:ring-0"
                value={searchQuery}
                //callback to update search query in parent component
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="text-white hover:text-orange-400 p-1 ml-2 skew-x-12 transition-colors cursor-pointer">
                <Search size={18} />
              </button>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Moon size={20} />
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION: Navigation Menu */}
      <div className="w-full border-t border-gray-800/50">
        {/* Added 'scrollbar-hide' logic and ensured overflow is handled cleanly */}
        <nav className="max-w-6xl mx-auto px-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center gap-6 py-3 whitespace-nowrap">
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <a 
                  href="#" 
                  className={`text-[13px] font-medium transition-colors flex items-center gap-1 ${
                    item === "Home" ? "text-orange-600" : "text-gray-300 hover:text-orange-600"
                  }`}
                >
                  {item}
                  {item === "Post Layouts" && <ChevronDown size={14} />}
                </a>
                {/* Underline for Active State */}
                {item === "Home" && (
                  <div className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-orange-600"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
