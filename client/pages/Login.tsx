import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Film } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Cinema Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/33d5c2a37b5325d8c32eda6d07f06ba54573c00d?width=2880')`
        }}
      />
      
      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-chill-background/84 backdrop-blur-sm rounded-2xl p-10 border border-chill-border">
          {/* Logo */}
          <div className="flex items-center justify-center gap-1 mb-9">
            <Film className="w-12 h-12 text-white" />
            <h1 className="font-londrina text-5xl text-white">CHILL</h1>
          </div>

          {/* Header */}
          <div className="text-center mb-9">
            <h2 className="text-white text-3xl font-bold font-lato mb-2">Masuk</h2>
            <p className="text-white text-base font-lato">Selamat datang kembali!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-1.5">
              <label htmlFor="username" className="text-white text-lg font-medium font-lato">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Masukkan username"
                value={formData.username}
                onChange={handleInputChange}
                className="h-12 rounded-3xl border-chill-border bg-transparent text-white placeholder:text-chill-secondary px-5"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-white text-lg font-medium font-lato">
                Kata Sandi
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-12 rounded-3xl border-chill-border bg-transparent text-white placeholder:text-chill-secondary px-5 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-chill-disabled hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex justify-between items-center text-base font-lato">
              <p className="text-chill-secondary">
                Belum punya akun?{" "}
                <Link to="/register" className="text-white hover:underline">
                  Daftar
                </Link>
              </p>
              <Link to="/forgot-password" className="text-white hover:underline">
                Lupa kata sandi?
              </Link>
            </div>

            {/* Login Button */}
            <Button 
              type="submit"
              className="w-full h-12 rounded-3xl bg-chill-surface border border-chill-border text-white font-semibold text-base font-lato hover:bg-chill-surface/80 transition-colors"
            >
              Masuk
            </Button>

            {/* Divider */}
            <div className="text-center">
              <span className="text-chill-disabled text-sm font-lato">Atau</span>
            </div>

            {/* Google Login Button */}
            <Button 
              type="button"
              variant="outline"
              className="w-full h-12 rounded-3xl border-chill-border bg-transparent text-white font-semibold text-base font-lato hover:bg-white/10 transition-colors"
            >
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/74148bc0b86fd5647f0aabd1b4b332034b023ac6?width=36" 
                alt="Google" 
                className="w-4.5 h-4.5 mr-5"
              />
              Masuk dengan Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
