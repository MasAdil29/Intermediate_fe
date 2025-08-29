import { Film } from "lucide-react";
import { Link } from "react-router-dom";
import { useUsers } from "@/context/UserContext.jsx";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { currentUser, logout } = useUsers();

  return (
    <nav className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-6 bg-chill-background relative z-10">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center gap-4 md:gap-10 lg:gap-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <Film className="w-6 h-5 md:w-7 md:h-6 text-white" />
          <span className="font-londrina text-2xl md:text-3xl text-white">
            CHILL
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-20">
          <Link
            to="/series"
            className="text-white text-base lg:text-lg font-medium font-lato hover:text-chill-secondary transition-colors"
          >
            Series
          </Link>
          <Link
            to="/film"
            className="text-white text-base lg:text-lg font-medium font-lato hover:text-chill-secondary transition-colors"
          >
            Film
          </Link>
          <Link
            to="/my-list"
            className="text-white text-base lg:text-lg font-medium font-lato hover:text-chill-secondary transition-colors"
          >
            Daftar Saya
          </Link>
        </div>
      </div>

      {/* Right side - Auth */}
      <div className="flex items-center gap-3">
        {currentUser ? (
          <>
            <span className="text-white font-lato hidden sm:inline">{currentUser.username}</span>
            <Button
              variant="outline"
              className="rounded-full border-chill-border text-white hover:bg-white/10"
              onClick={logout}
            >
              Keluar
            </Button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-white text-base font-lato hover:text-chill-secondary transition-colors"
            >
              Masuk
            </Link>
            <Link to="/register">
              <Button className="rounded-full bg-chill-primary hover:bg-chill-primary/90 text-white font-lato">
                Daftar
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
