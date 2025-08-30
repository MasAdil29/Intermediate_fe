// Simple in-memory movies store for demo purposes
// In production, replace with a real database

let _id = 1;
const newId = () => String(_id++);

function ensureIds(arr) {
  return arr.map((item) => ({ id: item.id ?? newId(), ...item }));
}

const movies = {
  continueWatching: ensureIds([
    {
      title: "Don't Look Up",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7dd50970ae754f3467593f83407d1f502d232558?width=604",
      rating: "4.5/5",
    },
    {
      title: "Blue Lock",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e398a850094aa511dd4358cc5d2dc1db7adf4f57?width=604",
      rating: "4.6/5",
      badge: "Episode Baru",
    },
    {
      title: "The Batman",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3d0051dc63e8c04bca9d6649df56be59bfd51d12?width=604",
      rating: "4.2/5",
    },
    {
      title: "A Man Called Otto",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/490008ffc10cb42fe0d6281327ec3b3b1e498eaa?width=604",
      rating: "4.4/5",
    },
  ]),
  topRating: ensureIds([
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0e7688035ee94d7d6c7db937c63b19fa0aeda90d?width=468",
      badge: "Episode Baru",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/21f6bdda7aa5d680bc68fc67cb5eaa690c7b6ae5?width=468",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8e6fabc026036d99bddc21cd807e094c43b7c12e?width=468",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/49dbb0e1e3316edc25255b7bef1dbe1ea665b3c3?width=468",
      badge: "Episode Baru",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f7bef839e07cd66222c4ad767b1912a29f0af6e1?width=468",
      topLabel: true,
    },
  ]),
  trending: ensureIds([
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/68f1c7bf88111f06ecd4d215bd76b2a12748501e?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ac3ed18693d7f320eda6aac1d7ab654467f035c0?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bab7be20989b09d35dea55d3f27613db6821d75c?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6776119b1def59e893def53fd7e9e9bea145862a?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/af8925fe29015ab87ce7960f3a932992c7aad1c3?width=468",
      topLabel: true,
    },
  ]),
  newReleases: ensureIds([
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/af8925fe29015ab87ce7960f3a932992c7aad1c3?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f7bc264ecd34c4b5b84fae79067ad75aac3f4059?width=468",
      badge: "Episode Baru",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f7bef839e07cd66222c4ad767b1912a29f0af6e1?width=468",
      topLabel: true,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/49dbb0e1e3316edc25255b7bef1dbe1ea665b3c3?width=468",
      badge: "Episode Baru",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d318e2fac45dc3d94da90e6d76a25d0744bab69?width=468",
    },
  ]),
};

function getCategory(arrMap, category) {
  const list = arrMap[category];
  if (!list) return null;
  arrMap[category] = list.map((x) => ({ id: x.id ?? newId(), ...x }));
  return arrMap[category];
}

export function moviesRouter(app) {
  // All lists
  app.get("/api/movies", (_req, res) => {
    res.json(movies);
  });

  // List by category
  app.get("/api/movies/:category", (req, res) => {
    const list = getCategory(movies, req.params.category);
    if (!list) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    res.json(list);
  });

  // Single item
  app.get("/api/movies/:category/:id", (req, res) => {
    const list = getCategory(movies, req.params.category);
    if (!list) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    const item = list.find((m) => m.id === req.params.id);
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json(item);
  });

  // Add
  app.post("/api/movies/:category", (req, res) => {
    const { category } = req.params;
    const item = req.body;
    const list = getCategory(movies, category);
    if (!list) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    if (!item || typeof item !== "object") return res.status(400).json({ message: "Data tidak valid" });
    const created = { id: newId(), ...item };
    list.unshift(created);
    res.status(201).json(created);
  });

  // Update
  app.put("/api/movies/:category/:id", (req, res) => {
    const { category, id } = req.params;
    const patch = req.body ?? {};
    const list = getCategory(movies, category);
    if (!list) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    const idx = list.findIndex((m) => m.id === id);
    if (idx === -1) return res.status(404).json({ message: "Item tidak ditemukan" });
    const updated = { ...list[idx], ...patch, id };
    list[idx] = updated;
    res.json(updated);
  });

  // Delete by id
  app.delete("/api/movies/:category/:id", (req, res) => {
    const { category, id } = req.params;
    const list = getCategory(movies, category);
    if (!list) return res.status(404).json({ message: "Kategori tidak ditemukan" });
    const before = list.length;
    const filtered = list.filter((m) => m.id !== id);
    movies[category] = filtered;
    const removed = Math.max(0, before - filtered.length);
    if (removed === 0) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json({ removed });
  });
}
