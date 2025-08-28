import { Film, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-6 bg-chill-background relative z-10">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <Film className="w-7 h-6 text-white" />
          <span className="font-londrina text-3xl text-white">CHILL</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-20">
          <Link to="/series" className="text-white text-lg font-medium font-lato hover:text-chill-secondary transition-colors">
            Series
          </Link>
          <Link to="/film" className="text-white text-lg font-medium font-lato hover:text-chill-secondary transition-colors">
            Film
          </Link>
          <Link to="/my-list" className="text-white text-lg font-medium font-lato hover:text-chill-secondary transition-colors">
            Daftar Saya
          </Link>
        </div>
      </div>

      {/* Right side - User Avatar */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <ChevronDown className="w-7 h-7 text-white" />
      </div>
    </nav>
  );
}
