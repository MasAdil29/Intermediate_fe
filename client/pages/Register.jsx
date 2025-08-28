import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Film } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Cinema Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/eee0cd72436288bda9e6057e226fef581c2db0f1?width=2880')`
        }}
      />
      
      {/* Registration Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-chill-background/84 backdrop-blur-sm rounded-2xl p-10 border border-chill-border">
          {/* Logo */}
          <div className="flex items-center justify-center gap-1 mb-9">
            <Film className="w-12 h-12 text-white" />
            <h1 className="font-londrina text-5xl text-white">CHILL</h1>
          </div>

          {/* Header */}
          <div className="text-center mb-9">
            <h2 className="text-white text-3xl font-bold font-lato mb-2">Daftar</h2>
            <p className="text-white text-base font-lato">Selamat datang!</p>
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

            {/* Confirm Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="confirmPassword" className="text-white text-lg font-medium font-lato">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="h-12 rounded-3xl border-chill-border bg-transparent text-white placeholder:text-chill-secondary px-5 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-chill-disabled hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Link to Login */}
            <div className="text-base font-lato">
              <p className="text-chill-secondary">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-white hover:underline">
                  Masuk
                </Link>
              </p>
            </div>

            {/* Register Button */}
            <Button 
              type="submit"
              className="w-full h-12 rounded-3xl bg-chill-surface border border-chill-border text-white font-semibold text-base font-lato hover:bg-chill-surface/80 transition-colors"
            >
              Daftar
            </Button>

            {/* Divider */}
            <div className="text-center">
              <span className="text-chill-disabled text-sm font-lato">Atau</span>
            </div>

            {/* Google Register Button */}
            <Button 
              type="button"
              variant="outline"
              className="w-full h-12 rounded-3xl border-chill-border bg-transparent text-white font-semibold text-base font-lato hover:bg-white/10 transition-colors"
            >
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5aaba706d29239457be3134a0032ba8229cb09da?width=36" 
                alt="Google" 
                className="w-4.5 h-4.5 mr-5"
              />
              Daftar dengan Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
