import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate(); // 2. Initialize the navigation function

  return (
    //#121417 dark-gray
    <footer className="w-full bg-[#121417] text-white border-t border-gray-800 pt-12 pb-6"> 
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            {/* 3. Added onClick and hover effect for better UX */}
            <div 
              className="flex items-center tracking-tighter uppercase mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/home")}
            >
              <span className="text-orange-600 text-3xl font-black italic">Daily</span>
              {/*marign left ml-1 */}
              <span className="text-white text-xl font-bold ml-1">News</span>
            </div>
            {/*leading-relaxed it sets the line height to 1.625 */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing you the most reliable and up-to-date news from around the world. Stay informed, stay ahead.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase text-orange-600 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/home")}
            >Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/science" className="hover:text-white transition-colors">Science</Link></li>
              <li><Link to="/sports" className="hover:text-white transition-colors">Sports</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase text-orange-600 cursor-pointer hover:opacity-80 transition-opacity">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 tabIndex="0" className="text-lg font-bold mb-4 uppercase text-orange-600 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm"
            onClick={() => navigate("/contact")}
            >
              Newsletter</h4>
            <div className="flex bg-[#1a1d21] border border-gray-800 p-1">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none text-sm p-2 w-full"
              />
              <button className="bg-orange-600 p-2 hover:bg-orange-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Daily News Media Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <Facebook size={20} className="hover:text-blue-600 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-pink-500 cursor-pointer transition-colors" />
            <Youtube size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;