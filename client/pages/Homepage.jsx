import { Info, Play, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import PosterCard from "@/components/PosterCard";
import MovieSection from "@/components/MovieSection";
import Footer from "@/components/Footer";

export default function Homepage() {
  // Sample movie data
  const continueWatching = [
    {
      title: "Don't Look Up",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7dd50970ae754f3467593f83407d1f502d232558?width=604",
      rating: "4.5/5"
    },
    {
      title: "Blue Lock",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e398a850094aa511dd4358cc5d2dc1db7adf4f57?width=604",
      rating: "4.6/5",
      badge: "Episode Baru"
    },
    {
      title: "The Batman",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d0051dc63e8c04bca9d6649df56be59bfd51d12?width=604",
      rating: "4.2/5"
    },
    {
      title: "A Man Called Otto",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/490008ffc10cb42fe0d6281327ec3b3b1e498eaa?width=604",
      rating: "4.4/5"
    }
  ];

  const topRating = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0e7688035ee94d7d6c7db937c63b19fa0aeda90d?width=468",
      badge: "Episode Baru"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/21f6bdda7aa5d680bc68fc67cb5eaa690c7b6ae5?width=468"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8e6fabc026036d99bddc21cd807e094c43b7c12e?width=468"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/49dbb0e1e3316edc25255b7bef1dbe1ea665b3c3?width=468",
      badge: "Episode Baru"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f7bef839e07cd66222c4ad767b1912a29f0af6e1?width=468",
      topLabel: true
    }
  ];

  const trending = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/68f1c7bf88111f06ecd4d215bd76b2a12748501e?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ac3ed18693d7f320eda6aac1d7ab654467f035c0?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/bab7be20989b09d35dea55d3f27613db6821d75c?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6776119b1def59e893def53fd7e9e9bea145862a?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/af8925fe29015ab87ce7960f3a932992c7aad1c3?width=468",
      topLabel: true
    }
  ];

  const newReleases = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/af8925fe29015ab87ce7960f3a932992c7aad1c3?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f7bc264ecd34c4b5b84fae79067ad75aac3f4059?width=468",
      badge: "Episode Baru"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f7bef839e07cd66222c4ad767b1912a29f0af6e1?width=468",
      topLabel: true
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/49dbb0e1e3316edc25255b7bef1dbe1ea665b3c3?width=468",
      badge: "Episode Baru"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6d318e2fac45dc3d94da90e6d76a25d0744bab69?width=468"
    }
  ];

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
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/15047614df2eb9a82f8fa2d93ebc2d989720586a?width=2880')`
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
                Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
                Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa
                sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
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
                  <span className="text-chill-secondary text-base md:text-lg font-lato">18+</span>
                </div>
              </div>

              {/* Volume Control */}
              <button className="p-2.5 border border-chill-secondary rounded-3xl hover:bg-white/10 transition-colors">
                <VolumeX className="w-5 md:w-6 h-5 md:h-6 text-chill-secondary" />
              </button>
            </div>
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
