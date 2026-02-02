import React, { useState } from "react";
import { Search, Moon, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useNews } from "../../context/NewsContext";

function Header() {
  const { searchQuery, setSearchQuery } = useNews();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home", "Business", "Entertainment", "General", 
    "Health", "Science", "Sports", "Technology"
  ];

  return (
    <header className="w-full bg-[#121417] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        
        {/* TOP ROW: Handles both Mobile (Image 2) and Desktop (Search on Right) */}
        <div className="flex justify-between items-center gap-4">
          
          {/* LOGO */}
          <div 
            className="flex items-center tracking-tighter uppercase cursor-pointer shrink-0"
            onClick={() => navigate("/home")}
          >
            <span className="text-orange-600 text-2xl md:text-4xl font-black italic">Daily</span>
            <span className="text-white text-xl md:text-2xl font-bold ml-1">News</span>
          </div>

          {/* RIGHT SIDE GROUP: Search & Controls */}
          <div className="flex items-center gap-3 flex-grow justify-end">
            
            {/* SEARCH BAR: Desktop (Right Side) */}
              <div className="hidden sm:flex relative items-center w-full max-w-[320px]">
                <div className="flex bg-[#1a1d21] items-center px-3 py-1 -skew-x-12 border border-gray-800 w-full relative">
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="bg-transparent border-none outline-none text-gray-300 text-sm py-1 skew-x-12 w-full focus:ring-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {/* This button now has the orange background and proper skewing */}
                  <button className="bg-orange-600 text-white p-2 ml-2  hover:bg-orange-700 transition-colors">
                    <div className="skew-x-12">
                      <Search size={18} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </div>

            {/* THEME TOGGLE (Always visible next to search/menu) */}
            <button className="bg-orange-600 p-2 rounded-md text-white shrink-0 hover:bg-orange-700 transition-colors">
              <Moon size={20} fill="currentColor" />
            </button>

            {/* MOBILE MENU TOGGLE (Image 2 style - only visible on small screens) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden bg-orange-600 p-2 rounded-md text-white shrink-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE ONLY SEARCH BAR: Appears below logo on mobile screens */}
        <div className="mt-4 sm:hidden">
          <div className="flex bg-[#1a1d21] items-center px-4 py-1 -skew-x-12 border border-gray-800 w-full">
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent border-none outline-none text-gray-300 text-sm py-1 skew-x-12 w-full focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-orange-600 text-white p-1.5 ml-2 rounded-md">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER: Vertical list of categories */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#1a1d21] border-t border-gray-800">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-800/20">
                <NavLink 
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-6 py-4 text-sm font-bold uppercase ${
                      isActive ? "text-orange-600 bg-[#121417]" : "text-gray-400"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* DESKTOP NAV BAR: Categories remain here */}
      <nav className="hidden sm:block w-full border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto [scrollbar-width:none]">
          <ul className="flex items-center gap-8 h-14 whitespace-nowrap">
            {navItems.map((item, index) => (
              <li key={index} className="h-full flex items-center relative">
                <NavLink to={`/${item.toLowerCase()}`} className={({ isActive }) => 
                  `text-sm font-bold uppercase transition-colors ${isActive ? "text-orange-600" : "text-gray-400 hover:text-white"}`
                }>
                  {({ isActive }) => (
                    <>
                      {item}
                      {isActive && <div className="absolute bottom-0 w-full h-[3px] bg-orange-600 shadow-[0_-2px_8px_rgba(234,88,12,0.4)]"></div>}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
