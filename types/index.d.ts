// import { MotionProps } from "framer-motion";

declare interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

declare interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
declare type PaginationControlsProps = {
  url: string;
};

declare type MovieGridProps = {
  moviesList: MovieApiResponse | undefined;
};

declare type ContentProps = {
  moviesList: MovieApiResponse;
};

declare type MovieCardProps = {
  movie: Movie;
  index?: number;
  className?: ClassValue;
};

declare type TitleProps = {
  name: string;
  text?: string;
};

interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

declare interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: any[]; // If you have the structure, you can replace `any` with a specific type
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

declare type SearchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

type Gender = 0 | 1 | 2;

declare interface CastMember {
  adult: boolean;
  gender: Gender;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: Gender;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

declare interface MovieCredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

declare type MovieDetailsProps = {
  movie: Movie | undefined;
  movieCreadits: MovieCredits | undefined;
  similerMovies: MovieApiResponse | undefined;
};
