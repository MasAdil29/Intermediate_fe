import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  addMovie,
  getMovies,
  updateMovie as apiUpdate,
  deleteMovie as apiDelete,
} from "@/lib/apiClient.js";

export function useMovies() {
  const queryClient = useQueryClient();

  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    staleTime: 60_000,
  });

  const addMutation = useMutation({
    mutationFn: ({ category, item }) => addMovie(category, item),
    onMutate: async ({ category, item }) => {
      await queryClient.cancelQueries({ queryKey: ["movies"] });
      const previous = queryClient.getQueryData(["movies"]);
      if (previous && previous[category]) {
        const optimistic = { id: `opt-${Date.now()}`, ...item };
        queryClient.setQueryData(["movies"], {
          ...previous,
          [category]: [optimistic, ...previous[category]],
        });
      }
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous)
        queryClient.setQueryData(["movies"], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ category, id, patch }) => apiUpdate(category, id, patch),
    onMutate: async ({ category, id, patch }) => {
      await queryClient.cancelQueries({ queryKey: ["movies"] });
      const previous = queryClient.getQueryData(["movies"]);
      if (previous && previous[category]) {
        queryClient.setQueryData(["movies"], {
          ...previous,
          [category]: previous[category].map((m) =>
            m.id === id ? { ...m, ...patch } : m,
          ),
        });
      }
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous)
        queryClient.setQueryData(["movies"], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: ({ category, id }) => apiDelete(category, id),
    onMutate: async ({ category, id }) => {
      await queryClient.cancelQueries({ queryKey: ["movies"] });
      const previous = queryClient.getQueryData(["movies"]);
      if (previous && previous[category]) {
        queryClient.setQueryData(["movies"], {
          ...previous,
          [category]: previous[category].filter((m) => m.id !== id),
        });
      }
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous)
        queryClient.setQueryData(["movies"], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  return {
    ...moviesQuery,
    addMovie: (category, item) => addMutation.mutate({ category, item }),
    updateMovie: (category, id, patch) =>
      updateMutation.mutate({ category, id, patch }),
    deleteMovie: (category, id) => deleteMutation.mutate({ category, id }),
  };
}
