import { Film } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const genreColumns = [
    ['Aksi', 'Anak-anak', 'Anime', 'Britania'],
    ['Drama', 'Fantasi Ilmiah & Fantasi', 'Kejahatan', 'KDrama'],
    ['Komedi', 'Petualangan', 'Perang', 'Romantis'],
    ['Sains & Alam', 'Thriller']
  ];

  const helpLinks = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'];

  return (
    <footer className="bg-chill-background border-t border-chill-border px-4 md:px-10 lg:px-20 py-10 md:py-15">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        {/* Left Section - Logo and Copyright */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <Film className="w-8 md:w-12 h-7 md:h-11 text-white" />
            <span className="font-londrina text-3xl md:text-5xl text-white">CHILL</span>
          </div>

          {/* Copyright */}
          <p className="text-chill-secondary text-sm md:text-base font-normal">
            @2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-40">
          {/* Genre Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base font-bold font-lato">Genre</h3>
            <div className="grid grid-cols-2 md:flex gap-4 md:gap-7">
              {genreColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-3">
                  {column.map((genre, index) => (
                    <Link
                      key={index}
                      to={`/genre/${genre.toLowerCase()}`}
                      className="text-chill-secondary text-sm md:text-base font-medium font-lato hover:text-white transition-colors"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base font-bold font-lato">Bantuan</h3>
            <div className="flex flex-col gap-3">
              {helpLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-chill-secondary text-sm md:text-base font-medium font-lato hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
