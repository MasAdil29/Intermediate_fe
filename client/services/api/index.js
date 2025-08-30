import {
  getCategory,
  addMovie,
  updateMovie,
  deleteMovie,
} from "@/lib/apiClient.js";

export async function getData(category) {
  const data = await getCategory(category);
  return Array.isArray(data) ? data : [];
}

export async function addData(category, item) {
  return addMovie(category, item);
}

export async function editData(category, id, patch) {
  return updateMovie(category, id, patch);
}

export async function deleteData(category, id) {
  return deleteMovie(category, id);
}
