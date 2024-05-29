import { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import MoviesGrid from "@/components/moviesGrid";
import { fetchSearchedMovies } from "@/lib/endpoints";
import PaginationControls from "@/components/paginationControls";
import Search from "@/components/search";

const SearchPage = async ({ searchParams }: SearchParamsProps) => {
  const pageNumber = searchParams["page"] ?? "1";
  const term = searchParams["term"] ?? "all";

  let moviesList: MovieApiResponse | undefined;
  let error: string | undefined;

  try {
    moviesList = await fetchSearchedMovies(term, pageNumber);
  } catch (err) {
    console.error(err);
    error = "Faild to fetch movies";
  }

  return error ? (
    <div className="w-full text-center h-full grid place-content-center self-center">
      <h1 className="text-2xl">Something Went Wrong!!</h1>
    </div>
  ) : moviesList ? (
    <>
      <Search />
      <MoviesGrid moviesList={moviesList} />
      <PaginationControls tab="search" />
    </>
  ) : null;
};

export default SearchPage;
