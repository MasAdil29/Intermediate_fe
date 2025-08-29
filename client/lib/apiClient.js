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

export async function addMovie(category, item) {
  const { data } = await api.post(`/api/movies/${encodeURIComponent(category)}` , item);
  return data;
}

export async function removeMovie(category, params) {
  const { data } = await api.delete(`/api/movies/${encodeURIComponent(category)}`, { params });
  return data;
}
