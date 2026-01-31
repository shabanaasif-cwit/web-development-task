// src/components/layout/header.jsx
import React from "react";  
import { Search, Moon, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink for URL sync
import { useNews } from "../../context/NewsContext"; 

function Header() {
  const { searchQuery, setSearchQuery } = useNews();
  const navigate = useNavigate(); // 2. Initialize the navigation function
   
  const navItems = [
    "Home", "Business", "Entertainment", "General", 
    "Health", "Science", "Sports", "Technology"
  ];

  return (
    <header className="w-full bg-[#121417] shadow-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-y-4">
        
        {/* LOGO SECTION: Added cursor-pointer and onClick navigation */}
        <div 
          className="flex items-center tracking-tighter uppercase shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => navigate("/home")} // 3. Navigate to home route
          role="button" // For accessibility
          tabIndex="0"  // Allows keyboard users to focus the logo
          onKeyDown={(e) => e.key === "Enter" && navigate("/home")}
        >
          <span className="text-orange-600 text-2xl md:text-5xl font-black italic">Daily</span>
          <span className="text-white text-xl md:text-2xl font-bold ml-1">News</span>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex items-center flex-grow sm:flex-initial">
            <div className="flex bg-[#1a1d21] items-center px-4 py-1 -skew-x-12 border border-gray-800 w-full">
              <label>
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent border-none outline-none text-gray-300 text-sm py-1 skew-x-12 w-full md:w-64 focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              /></label>
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
          <nav className="max-w-6xl mx-auto px-4 overflow-x-auto overflow-y-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex items-center gap-8 py-0 whitespace-nowrap h-16">
              {navItems.map((item, index) => (
                <li key={index} className="h-full flex items-center relative">
                  <NavLink 
                    to={`/${item.toLowerCase()}`}
                    // The function inside className allows us to toggle colors based on isActive
                    className={({ isActive }) => 
                      `text-lg font-bold uppercase tracking-tight transition-colors flex items-center h-full gap-1.5 ${
                        isActive ? "text-orange-600" : "text-gray-300 hover:text-orange-600"
                      }`
                    }
                  >
                    {/* NavLink provides an 'isActive' state we can use to conditionally render the line */}
                    {({ isActive }) => (
                      <>
                        {item}
                        {item === "Post Layouts" && <ChevronDown size={18} />}
                        
                        {isActive && (
                          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-orange-600 shadow-[0_-2px_10px_rgba(234,88,12,0.4)]"></div>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </header>
  );
}

export default Header;
