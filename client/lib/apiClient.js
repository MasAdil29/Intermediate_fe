import axios from "axios";

export const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getMovies() {
  const { data } = await api.get("/api/movies");
  return data;
}

export async function getCategory(category) {
  const { data } = await api.get(`/api/movies/${encodeURIComponent(category)}`);
  return data;
}

export async function getMovie(category, id) {
  const { data } = await api.get(
    `/api/movies/${encodeURIComponent(category)}/${encodeURIComponent(id)}`,
  );
  return data;
}

export async function addMovie(category, item) {
  const { data } = await api.post(
    `/api/movies/${encodeURIComponent(category)}`,
    item,
  );
  return data;
}

export async function updateMovie(category, id, patch) {
  const { data } = await api.put(
    `/api/movies/${encodeURIComponent(category)}/${encodeURIComponent(id)}`,
    patch,
  );
  return data;
}

export async function deleteMovie(category, id) {
  const { data } = await api.delete(
    `/api/movies/${encodeURIComponent(category)}/${encodeURIComponent(id)}`,
  );
  return data;
}
