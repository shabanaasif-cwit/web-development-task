// src/components/layout/header.jsx
import React from "react";  
import { Search, Moon, ChevronDown } from "lucide-react";
import { useNews } from "../../context/NewsContext"; 

function Header() {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory 
  } = useNews();

  const navItems = [
    "Home", "Business", "Entertainment", "General", 
    "Health", "Science", "Sports", "Technology"
  ];

  return (
    <header className="w-full bg-[#121417] shadow-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-y-4">
        <div className="flex items-center tracking-tighter uppercase shrink-0">
          <span className="text-orange-600 text-2xl md:text-5xl font-black italic cursor-pointer">Daily</span>
          <span className="text-white text-xl md:text-2xl font-bold ml-1">News</span>
        </div>

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

      <div className="w-full border-t border-gray-800/50">
        <nav className="max-w-6xl mx-auto px-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center gap-6 py-3 whitespace-nowrap">
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(item); 
                  }}
                  className={`text-[13px] font-medium transition-colors flex items-center gap-1 ${
                    selectedCategory === item ? "text-orange-600" : "text-gray-300 hover:text-orange-600"
                  }`}
                >
                  {item}
                  {item === "Post Layouts" && <ChevronDown size={14} />}
                </a>
                
                {selectedCategory === item && (
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
