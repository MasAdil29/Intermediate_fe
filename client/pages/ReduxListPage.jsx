import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListView from "@/components/ListView.jsx";

export default function ReduxListPage() {
  return (
    <div className="min-h-screen bg-chill-background">
      <Navbar />
      <div className="px-4 md:px-10 lg:px-20 py-6 md:py-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold font-lato mb-6">
          Daftar (Redux + services/api)
        </h1>
        <ListView />
      </div>
      <Footer />
    </div>
  );
}
