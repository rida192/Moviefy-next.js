// app/lib/fetchLatestMovies.js

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.NEXT_API_KEY!; // Ensure this is properly configured in your environment variables

export const fetchLatestMovies = async (
  pageNumber: string | string[]
): Promise<MovieApiResponse> => {
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: MovieApiResponse = await response.json();
  return data;
};

export const fetchMovieDetails = async (
  movieId: string | string[]
): Promise<Movie> => {
  const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: Movie = await response.json();
  return data;
};

export const fetchTopRatedMovies = async (
  pageNumber: string | string[]
): Promise<MovieApiResponse> => {
  const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageNumber}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: MovieApiResponse = await response.json();
  return data;
};

// lib/endpoints.js

export const fetchSearchedMovies = async (
  search: string | string[] = "all",
  pageNumber: string | string[] | number = "1"
): Promise<MovieApiResponse> => {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}&query=${search}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: MovieApiResponse = await response.json();
  return data;
};

export const fetchSimilerMovies = async (
  movieId: string | string[]
): Promise<MovieApiResponse> => {
  const url = `${baseUrl}/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: MovieApiResponse = await response.json();
  return data;
};

export const fetchMovieCreadits = async (
  movieId: string | string[]
): Promise<MovieCredits> => {
  const url = `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch latest movies");
  }
  const data: MovieCredits = await response.json();
  return data;
};
