import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-chill-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white font-lato">404</h1>
        <p className="text-xl text-chill-secondary mb-4 font-lato">
          Oops! Halaman tidak ditemukan
        </p>
        <a
          href="/"
          className="text-chill-primary hover:text-chill-primary/80 underline font-lato"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
