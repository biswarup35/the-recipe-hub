import useSWR from "swr";

const useRecipes = (page = 1, category = "indian") => {
  const { data, error } = useSWR(`/recipes?category=${category}&page=${page}`);
  const loading = !error && !data;

  return { data, loading, error };
};

export default useRecipes;
