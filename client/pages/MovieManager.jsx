import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieSection from "@/components/MovieSection";
import MovieCard from "@/components/MovieCard";
import PosterCard from "@/components/PosterCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMovies } from "@/hooks/useMovies.js";

const categories = [
  { key: "continueWatching", label: "Melanjutkan Tonton Film", card: "movie" },
  { key: "topRating", label: "Top Rating", card: "poster" },
  { key: "trending", label: "Trending", card: "poster" },
  { key: "newReleases", label: "Rilis Baru", card: "poster" },
];

export default function MovieManager() {
  const { data, isLoading, isError, addMovie, updateMovie, deleteMovie } =
    useMovies();
  const [category, setCategory] = useState(categories[0].key);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("4.0/5");
  const [badge, setBadge] = useState("");

  const handleAdd = () => {
    const item = {
      title: title || undefined,
      image,
      rating: rating || undefined,
      badge: badge || undefined,
    };
    addMovie(category, item);
    setTitle("");
    setImage("");
    setBadge("");
  };

  const list = data?.[category] ?? [];
  const renderCard = (m) =>
    categories.find((c) => c.key === category)?.card === "movie" ? (
      <MovieCard {...m} />
    ) : (
      <PosterCard {...m} />
    );

  return (
    <div className="min-h-screen bg-chill-background">
      <Navbar />

      <div className="px-4 md:px-10 lg:px-20 py-6 md:py-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold font-lato mb-4">
          Kelola Film
        </h1>

        <div className="grid gap-3 md:grid-cols-5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="md:col-span-1 rounded-xl bg-transparent border border-chill-border text-white px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c.key} value={c.key} className="bg-chill-background">
                {c.label}
              </option>
            ))}
          </select>
          <Input
            placeholder="Judul (opsional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="URL Gambar"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Input
            placeholder="Rating (opsional)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Badge (opsional)"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
            />
            <Button onClick={handleAdd} className="rounded-full">
              Tambah
            </Button>
          </div>
        </div>

        <MovieSection title="Daftar">
          {isLoading && (
            <p className="text-chill-secondary font-lato">Memuat…</p>
          )}
          {isError && <p className="text-red-400 font-lato">Gagal memuat.</p>}
          {list.map((m) => (
            <div key={m.id} className="flex-shrink-0">
              {renderCard(m)}
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  className="rounded-full border-chill-border text-white hover:bg-white/10"
                  onClick={() =>
                    updateMovie(category, m.id, {
                      title: (m.title || "") + " *",
                    })
                  }
                >
                  Update Judul
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-chill-border text-white hover:bg-white/10"
                  onClick={() => deleteMovie(category, m.id)}
                >
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </MovieSection>
      </div>

      <Footer />
    </div>
  );
}
