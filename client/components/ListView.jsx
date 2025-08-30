import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "@/store/redux/reducer.js";
import { getData, addData, editData, deleteData } from "@/services/api/index.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/MovieCard";
import PosterCard from "@/components/PosterCard";

const CATEGORY_OPTIONS = [
  { key: "continueWatching", label: "Melanjutkan Tonton Film", card: "movie" },
  { key: "topRating", label: "Top Rating", card: "poster" },
  { key: "trending", label: "Trending", card: "poster" },
  { key: "newReleases", label: "Rilis Baru", card: "poster" },
];

export default function ListView() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.apiData);

  const [category, setCategory] = useState(CATEGORY_OPTIONS[0].key);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("4.0/5");
  const [badge, setBadge] = useState("");

  const cardType = useMemo(() => CATEGORY_OPTIONS.find((c) => c.key === category)?.card, [category]);

  useEffect(() => {
    (async () => {
      const data = await getData(category);
      dispatch(setApiData(data));
    })();
  }, [category, dispatch]);

  const handleAdd = async () => {
    const payload = { title: title || undefined, image, rating: rating || undefined, badge: badge || undefined };
    await addData(category, payload);
    const data = await getData(category);
    dispatch(setApiData(data));
    setTitle("");
    setImage("");
    setBadge("");
  };

  const handleEdit = async (id, patch) => {
    await editData(category, id, patch);
    const data = await getData(category);
    dispatch(setApiData(data));
  };

  const handleDelete = async (id) => {
    await deleteData(category, id);
    const data = await getData(category);
    dispatch(setApiData(data));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-5">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="md:col-span-1 rounded-xl bg-transparent border border-chill-border text-white px-3 py-2">
          {CATEGORY_OPTIONS.map((c) => (
            <option key={c.key} value={c.key} className="bg-chill-background">
              {c.label}
            </option>
          ))}
        </select>
        <Input placeholder="Judul (opsional)" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="URL Gambar" value={image} onChange={(e) => setImage(e.target.value)} />
        <Input placeholder="Rating (opsional)" value={rating} onChange={(e) => setRating(e.target.value)} />
        <div className="flex gap-2 items-center">
          <Input placeholder="Badge (opsional)" value={badge} onChange={(e) => setBadge(e.target.value)} />
          <Button onClick={handleAdd} className="rounded-full">Tambah</Button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide">
          {items.map((m) => (
            <div key={m.id} className="flex-shrink-0">
              {cardType === "movie" ? <MovieCard {...m} /> : <PosterCard {...m} />}
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  className="rounded-full border-chill-border text-white hover:bg-white/10"
                  onClick={() => handleEdit(m.id, { title: (m.title || "") + " *" })}
                >
                  Edit Judul
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-chill-border text-white hover:bg-white/10"
                  onClick={() => handleDelete(m.id)}
                >
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
