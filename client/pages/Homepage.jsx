import { Info, Play, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import PosterCard from "@/components/PosterCard";
import MovieSection from "@/components/MovieSection";
import Footer from "@/components/Footer";
import { useMovies } from "@/hooks/useMovies.js";

export default function Homepage() {
  const { data, isLoading, isError } = useMovies();

  const continueWatching = data?.continueWatching ?? [];
  const topRating = data?.topRating ?? [];
  const trending = data?.trending ?? [];
  const newReleases = data?.newReleases ?? [];

  return (
    <div className="min-h-screen bg-chill-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[587px] flex flex-col justify-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/15047614df2eb9a82f8fa2d93ebc2d989720586a?width=2880')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-10 md:pb-15 lg:pb-20">
          <div className="max-w-4xl">
            {/* Title and Description */}
            <div className="mb-6 md:mb-10">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-lato mb-3 md:mb-5 leading-tight">
                Duty After School
              </h1>
              <p className="text-white text-base md:text-lg font-medium font-lato max-w-2xl leading-relaxed">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </div>

            {/* Action Buttons and Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Primary Button */}
                <Button className="bg-chill-primary hover:bg-chill-primary/90 text-white px-5 md:px-7 py-2.5 rounded-full font-bold text-sm md:text-base font-lato">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Mulai
                </Button>

                {/* Info Button */}
                <Button
                  variant="outline"
                  className="bg-chill-paper hover:bg-chill-paper/80 border-none text-white px-5 md:px-7 py-2.5 rounded-full font-bold text-sm md:text-base font-lato"
                >
                  <Info className="w-5 md:w-6 h-5 md:h-6 mr-2" />
                  Selengkapnya
                </Button>

                {/* Age Rating */}
                <div className="px-2.5 py-2.5 border border-chill-secondary rounded-3xl">
                  <span className="text-chill-secondary text-base md:text-lg font-lato">
                    18+
                  </span>
                </div>
              </div>

              {/* Volume Control */}
              <button className="p-2.5 border border-chill-secondary rounded-3xl hover:bg-white/10 transition-colors">
                <VolumeX className="w-5 md:w-6 h-5 md:h-6 text-chill-secondary" />
              </button>
            </div>

            {isLoading && (
              <p className="mt-6 text-chill-secondary font-lato">Memuat data…</p>
            )}
            {isError && (
              <p className="mt-6 text-red-400 font-lato">Gagal memuat data.</p>
            )}
          </div>
        </div>
      </section>

      {/* Continue Watching Section */}
      <MovieSection title="Melanjutkan Tonton Film">
        {continueWatching.map((movie, index) => (
          <div key={index} className="flex-shrink-0">
            <MovieCard {...movie} />
          </div>
        ))}
      </MovieSection>

      {/* Top Rating Section */}
      <MovieSection title="Top Rating Film dan Series Hari ini">
        {topRating.map((movie, index) => (
          <div key={index} className="flex-shrink-0">
            <PosterCard {...movie} />
          </div>
        ))}
      </MovieSection>

      {/* Trending Section */}
      <MovieSection title="Film Trending">
        {trending.map((movie, index) => (
          <div key={index} className="flex-shrink-0">
            <PosterCard {...movie} />
          </div>
        ))}
      </MovieSection>

      {/* New Releases Section */}
      <MovieSection title="Rilis Baru">
        {newReleases.map((movie, index) => (
          <div key={index} className="flex-shrink-0">
            <PosterCard {...movie} />
          </div>
        ))}
      </MovieSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
