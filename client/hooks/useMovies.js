import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addMovie, getMovies, removeMovie } from "@/lib/apiClient.js";

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
        queryClient.setQueryData(["movies"], {
          ...previous,
          [category]: [item, ...previous[category]],
        });
      }
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous) queryClient.setQueryData(["movies"], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: ({ category, params }) => removeMovie(category, params),
    onMutate: async ({ category, params }) => {
      await queryClient.cancelQueries({ queryKey: ["movies"] });
      const previous = queryClient.getQueryData(["movies"]);
      if (previous && previous[category]) {
        const filterFn = (m) => {
          if (params?.title) return (m.title ?? "").toLowerCase() !== String(params.title).toLowerCase();
          if (params?.image) return m.image !== params.image;
          return true;
        };
        queryClient.setQueryData(["movies"], {
          ...previous,
          [category]: previous[category].filter(filterFn),
        });
      }
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous) queryClient.setQueryData(["movies"], context.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  return {
    ...moviesQuery,
    addMovie: (category, item) => addMutation.mutate({ category, item }),
    removeMovie: (category, params) => removeMutation.mutate({ category, params }),
  };
}
