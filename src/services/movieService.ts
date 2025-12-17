import axios from "axios";
import type { Movie } from "../types/movie";

interface getMoviesResponse {
  results: Movie[];
  total_pages: number;
}

export default async function fetchMovies(
  query: string,
  page: number
): Promise<getMoviesResponse> {
  const url = "https://api.themoviedb.org/3/search/movie";
  const apiKey = import.meta.env.VITE_TMDB_TOKEN;

  const apiConfig = {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    params: {
      query: query,
      page: page,
    },
  };

  const response = await axios.get<getMoviesResponse>(url, apiConfig);

  return response.data;
}
